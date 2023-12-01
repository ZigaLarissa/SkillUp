from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from . import schemas

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")  # adjust the tokenUrl as needed

def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        # Attempt to decode the JWT token
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        
        # Extract user information from the payload
        user_email: str = payload.get("sub")
        if user_email is None:
            raise credentials_exception
        
        # Debug print to check the extracted username
        print("Extracted User Email:", user_email)
        
        # Create a TokenData object with the extracted username
        token_data = schemas.TokenData(email=user_email)
        
        # Debug print to check the created TokenData object
        print("Token Data:", token_data)
        
    except JWTError as e:
        # Debug print to check the error when decoding the token
        print("JWT Error:", e)
        raise credentials_exception
    
    return token_data

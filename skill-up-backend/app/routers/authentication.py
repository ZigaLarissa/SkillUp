from fastapi import APIRouter, Depends, status, HTTPException
from app import database, models, schemas, JWTtoken
from sqlalchemy.orm import Session
from app.hashing import Hash
from fastapi.security import OAuth2PasswordRequestForm
from typing import Union

router = APIRouter(
    tags=['Authentication']
)

@router.post("/login")
def login(request: schemas.Login, db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.email == request.username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail= f"Invalid User Email.")
        
    if not Hash.verify(user.password, request.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                detail= f"Incorrect password.")
        
        
    access_token = JWTtoken.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}
    
from pydantic import BaseModel
from typing import List, Optional

# 1. Create Pydantic models for the Item
class ItemBase(BaseModel):
    title: str
    description: str | None = None

class ItemCreate(ItemBase):
    pass #passing because we don't need to add anything new


# for reading items
class Item(ItemBase):
    id: int
    owner_email: str # to know which user owns the item

    class Config:
        orm_mode = True


# 2. Create Pydantic models for the User
class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str


# for reading users
class User(UserBase):
    id: int
    is_active: bool
    items: List[Item] = []

    class Config:
        orm_mode = True

# 3. Create Pydantic models for the Login
class Login(BaseModel):
    email: str
    password: str

# 4. Create Pydantic models for the Token
class Token(BaseModel):
    access_token: str
    token_type: str


# 5. Create Pydantic models for the TokenData
class TokenData(BaseModel):
    email: Optional[str] | None = None

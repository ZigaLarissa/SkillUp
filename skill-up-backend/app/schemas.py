from pydantic import BaseModel

# 1. Create Pydantic models for the Item
class ItemBase(BaseModel):
    title: str
    description: str | None = None

class ItemCreate(ItemBase):
    pass #passing because we don't need to add anything new


# for reading items
class Item(ItemBase):
    id: int
    owner_id: int

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
    items: list[Item] = []

    class Config:
        orm_mode = True
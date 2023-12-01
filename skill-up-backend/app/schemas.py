from pydantic import BaseModel
from typing import List, Optional

class TaskBase(BaseModel):
    title: str
    body: str


class UserBase(BaseModel):
    name: str
    email: str

    class Config():
        orm_mode = True


class Task(TaskBase):

    class Config():
        orm_mode = True



class ShowTask(BaseModel): 
    title: str
    body: str
    creator: UserBase

    class Config():
        orm_mode = True


class User(BaseModel):
    name: str
    email: str
    password: str

    class Config():
        orm_mode = True


class ShowUser(BaseModel):
    name: str
    email: str
    tasks: List[Task] = []

    class Config():
        orm_mode = True


class Login(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
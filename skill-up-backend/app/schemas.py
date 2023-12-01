from pydantic import BaseModel
from typing import List, Optional

class TaskBase(BaseModel):
    title: str
    body: str


class UserBase(BaseModel):
    name: str
    email: str

    class Config():
        from_attributes = True


class Task(TaskBase):

    class Config():
        from_attributes = True


class User(BaseModel):
    name: str
    email: str
    password: str

    class Config():
        from_attributes = True


class ShowUser(BaseModel):
    name: str
    email: str
    tasks: List[Task] = []

    class Config():
        from_attributes = True


class ShowTask(BaseModel):
    title: str
    body: str
    creator: UserBase

    class Config():
        from_attributes = True


class Login(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
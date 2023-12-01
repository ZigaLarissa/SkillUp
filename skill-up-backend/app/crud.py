# FastAPI CRUD (Create, Read, Update, Delete) operations
# CRUD operations are the most common operations in any database-driven application.
# FastAPI provides a convenient way to perform CRUD operations using SQLAlchemy ORM (Object Relational Mapper).


from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException
from typing import Annotated

from . import models, schemas, auth2
from .hashing import Hash


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

# create user function
def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(email=user.email, password=Hash.bcrypt(user.password))
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()


# create item function
def create_user_item(db: Session, item: schemas.ItemCreate, current_user: schemas.TokenData):
    db_item = models.Item(**item.dict(), owner_email=current_user.email)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
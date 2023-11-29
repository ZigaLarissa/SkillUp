from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base #importing Base from database.py

# User model
class User(Base):
    __tablename__ = "users"

    # model attributes/columns
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    is_active = Column(Boolean, default=True)

    # relationship with Item model
    items = relationship("Item", back_populates="owner")


# Item model
class Item(Base):
    __tablename__ = "items"

    # model attributes/columns
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id")) #adding foreign key to users table

    # relationship with User model
    owner = relationship("User", back_populates="items")
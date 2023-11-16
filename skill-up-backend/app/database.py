from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./app.db" #database url

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False} #sqlalchemy engine
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) #session local

Base = declarative_base() #declarative base
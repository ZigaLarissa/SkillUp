from typing import List
from fastapi import APIRouter, Depends, status, HTTPException, Response
from app import schemas, models, database
from sqlalchemy.orm import Session
from app.repositories import task
from . import auth2

router = APIRouter(
    prefix="/task",
    tags=["Tasks"]
)
get_db = database.get_db


@router.get("/", response_model= List[schemas.ShowTask])
def get_all(db: Session = Depends(get_db), current_user: schemas.User = Depends(auth2.get_current_user)):
    return task.get_all(db)

@router.post("/", status_code=status.HTTP_201_CREATED)
def create_task(request: schemas.Task, db: Session = Depends(get_db), current_user: schemas.User = Depends(auth2.get_current_user)):
    return task.create(request, db)

@router.get("/{id}", status_code=200, response_model=schemas.ShowTask)
def get_one(id: int, db: Session = Depends(get_db), current_user: schemas.User = Depends(auth2.get_current_user)):
    return task.get_one(id, db)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete(id: int, db: Session = Depends(get_db), current_user: schemas.User = Depends(auth2.get_current_user)):
    return task.destroy(db, id)

@router.put("/{id}", status_code=status.HTTP_202_ACCEPTED)
def update(id: int, request: schemas.Task, db: Session = Depends(get_db), current_user: schemas.User = Depends(auth2.get_current_user)):
    return task.update(id, request, db)
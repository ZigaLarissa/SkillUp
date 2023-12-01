from fastapi import HTTPException, status, Response
from sqlalchemy.orm import Session
from app import models, schemas


def get_all(db: Session):
    tasks = db.query(models.Task).all()
    return tasks

def create(request: schemas.Task ,db: Session):
    new_task = models.Task(title=request.title, body=request.body, user_id=1)
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

def get_one(id: int, db: Session):
    task = db.query(models.Task).filter(models.Task.id == id).first()

    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail= f"Task with id {id} is not found")
    
    return task

def destroy(db: Session, id: int):
    db.query(models.Task).filter(models.Task.id == id).delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)

def update(id: int, request: schemas.Task, db: Session):
    task = db.query(models.Task).filter(models.Task.id == id)

    if not task.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Task with id {id} not found.")
    
    task.update(request.dict())
    db.commit()
    return f"Task with id {id} is successfully updated"
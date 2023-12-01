from fastapi import APIRouter, Depends, status, HTTPException
from app import schemas, models, database
from sqlalchemy.orm import Session
from app.repositories import user

get_db = database.get_db
router = APIRouter(
    prefix="/User",
    tags=["Users"]
)

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.ShowUser)
def create_user(request: schemas.User, db: Session = Depends(get_db)):
    return user.create(request, db)

@router.get("/{id}", status_code=status.HTTP_200_OK, response_model=schemas.ShowUser)
def get_user(id: int, db: Session = Depends(get_db)):
    return user.get_user(db, id)
import uvicorn

from fastapi import FastAPI
from app import  models
from app.database import engine
from app.routers import task,user, authentication

app = FastAPI()

models.Base.metadata.create_all(engine)

app.include_router(authentication.router)
app.include_router(task.router)
app.include_router(user.router)


if __name__ == "__main__":
    uvicorn.run(app, host="192.168.1.65", port=8081)
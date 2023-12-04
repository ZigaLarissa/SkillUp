import uvicorn

from fastapi import FastAPI
from app import  models
from app.database import engine
from app.routers import task,user, authentication
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(engine)

app.include_router(authentication.router)
app.include_router(task.router)
app.include_router(user.router)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5000)
    #uvicorn.run(app, host="192.168.1.65", port=5000)
    #uvicorn.run(app, host="10.10.10.118", port=5000)
import uvicorn

from fastapi import FastAPI
from blogs import  models
from blogs.database import engine
from blogs.routers import blog,user, authentication

app = FastAPI()

models.Base.metadata.create_all(engine)

app.include_router(authentication.router)
app.include_router(blog.router)
app.include_router(user.router)


if __name__ == "__main__":
    uvicorn.run("app.api:app", host="192.168.1.65", port=8081, reload=True)
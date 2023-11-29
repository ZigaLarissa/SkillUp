import uvicorn


if __name__ == "__main__":
    uvicorn.run("app.api:app", host="192.168.1.65", port=8081, reload=True)
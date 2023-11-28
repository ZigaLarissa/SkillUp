import uvicorn


if __name__ == "__main__":
    uvicorn.run("app.api:app", host="192.168.1.66", port=8080, reload=True)
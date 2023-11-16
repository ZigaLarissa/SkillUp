import uvicorn

# instructed the uvicorn to run on port 8000.

if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=8000, reload=True)
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def ola():
    return {"message": "Bem vindo Pedro!"}
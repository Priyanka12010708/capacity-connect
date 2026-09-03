from fastapi import FastAPI

from app.routers import auth
from app.routers import profiles
from app.routers import courses
from app.routers import admin

app = FastAPI(
    title="Capacity Connect API",
    description="Backend API for the Capacity Connect platform",
    version="1.0.0",
)


@app.get("/")
def home():
    return {
        "message": "Capacity Connect API is running",
        "status": "success",
        "version": "1.0.0",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


app.include_router(auth.router)
app.include_router(profiles.router)
app.include_router(courses.router)
app.include_router(admin.router)
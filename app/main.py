from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import auth
from app.routers import profiles
from app.routers import courses
from app.routers import admin
from app.routers import assessments

from app.database import Base, engine
from app import models


# Create FastAPI app
app = FastAPI(
    title="Capacity Connect API",
    description="Backend API for the Capacity Connect platform",
    version="1.0.0",
)


# Create database tables
Base.metadata.create_all(bind=engine)


# Allow Next.js frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:3004",
        "http://localhost:3005",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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


# Include routers
app.include_router(auth.router)
app.include_router(profiles.router)
app.include_router(courses.router)
app.include_router(admin.router)
app.include_router(assessments.router)

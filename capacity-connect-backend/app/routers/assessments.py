from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import profiles, feedback, auth

app = FastAPI(
    title="Capacity Connect API",
    description="Backend API for Capacity Connect",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Existing backend routes
app.include_router(profiles.router)
app.include_router(feedback.router)

# Member 2 - Authentication
app.include_router(auth.router)


@app.get("/")
def home():
    return {
        "message": "Capacity Connect API is running",
        "status": "success",
        "version": "1.0.0"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "Capacity Connect backend is working"
    }
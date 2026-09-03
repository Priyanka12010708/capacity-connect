from fastapi import APIRouter

from app.routers.auth import users
from app.routers.profiles import profiles_db
from app.routers.courses import courses_db


router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


@router.get("/status")
def admin_status():
    return {
        "message": "Admin API is working",
        "status": "success"
    }


@router.get("/stats")
def admin_stats():
    return {
        "total_users": len(users),
        "total_profiles": len(profiles_db),
        "total_courses": len(courses_db)
    }


@router.get("/users")
def get_users():
    safe_users = []

    for user in users.values():
        safe_users.append({
            "username": user["username"],
            "email": user["email"]
        })

    return {
        "total": len(safe_users),
        "users": safe_users
    }
from datetime import timedelta
import hashlib
import secrets

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.security import create_access_token


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


users = {}


class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


def hash_password(password: str) -> str:
    salt = secrets.token_bytes(16)

    password_hash = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt,
        120000
    )

    return (
        salt.hex()
        + ":"
        + password_hash.hex()
    )


def verify_password(password: str, stored_password: str) -> bool:
    try:
        salt_hex, hash_hex = stored_password.split(":")

        salt = bytes.fromhex(salt_hex)
        stored_hash = bytes.fromhex(hash_hex)

        password_hash = hashlib.pbkdf2_hmac(
            "sha256",
            password.encode("utf-8"),
            salt,
            120000
        )

        return secrets.compare_digest(
            password_hash,
            stored_hash
        )

    except (ValueError, TypeError):
        return False


@router.post("/register")
def register(user: RegisterRequest):

    email = user.email.strip().lower()
    username = user.username.strip()

    if not username:
        raise HTTPException(
            status_code=400,
            detail="Username cannot be empty"
        )

    if len(user.password) < 6:
        raise HTTPException(
            status_code=400,
            detail="Password must be at least 6 characters"
        )

    if email in users:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    users[email] = {
        "username": username,
        "email": email,
        "password": hash_password(user.password),
        "role": "trainee"
    }

    return {
        "message": "Registration successful",
        "user": {
            "username": username,
            "email": email,
            "role": "trainee"
        }
    }


@router.post("/login")
def login(user: LoginRequest):

    email = user.email.strip().lower()

    existing_user = users.get(email)

    if existing_user is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verify_password(
        user.password,
        existing_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token(
        subject=email,
        role=existing_user["role"],
        expires_delta=timedelta(minutes=60)
    )

    return {
        "message": "Login successful",
        "access_token": token,
        "token_type": "bearer"
    }
from typing import List, Optional

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field


router = APIRouter(
    prefix="/profiles",
    tags=["Trainee Profiles"],
)


# ---------------------------------------------------------
# DATA MODELS
# ---------------------------------------------------------

class ProfileCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    email: str
    phone: Optional[str] = None
    designation: Optional[str] = None
    organization: Optional[str] = None
    location: Optional[str] = None

    qualifications: List[str] = Field(default_factory=list)
    work_experience: List[str] = Field(default_factory=list)
    interests: List[str] = Field(default_factory=list)
    skills: List[str] = Field(default_factory=list)
    certificates: List[str] = Field(default_factory=list)

    bio: Optional[str] = None


class ProfileUpdate(BaseModel):
    full_name: Optional[str] = Field(default=None, min_length=2, max_length=100)
    email: Optional[str] = None
    phone: Optional[str] = None
    designation: Optional[str] = None
    organization: Optional[str] = None
    location: Optional[str] = None

    qualifications: Optional[List[str]] = None
    work_experience: Optional[List[str]] = None
    interests: Optional[List[str]] = None
    skills: Optional[List[str]] = None
    certificates: Optional[List[str]] = None

    bio: Optional[str] = None


class ProfileResponse(ProfileCreate):
    profile_id: int


# ---------------------------------------------------------
# TEMPORARY STORAGE FOR PROTOTYPE
# ---------------------------------------------------------

profiles_db: dict[int, dict] = {}

next_profile_id = 1


# ---------------------------------------------------------
# CREATE PROFILE
# ---------------------------------------------------------

@router.post("/", response_model=ProfileResponse, status_code=201)
def create_profile(profile: ProfileCreate):
    global next_profile_id

    # Prevent duplicate email profiles
    for existing_profile in profiles_db.values():
        if existing_profile["email"].lower() == profile.email.lower():
            raise HTTPException(
                status_code=409,
                detail="A profile with this email already exists.",
            )

    profile_data = profile.model_dump()
    profile_data["profile_id"] = next_profile_id

    profiles_db[next_profile_id] = profile_data

    next_profile_id += 1

    return profile_data


# ---------------------------------------------------------
# GET ALL PROFILES
# ---------------------------------------------------------

@router.get("/", response_model=List[ProfileResponse])
def get_all_profiles():
    return list(profiles_db.values())


# ---------------------------------------------------------
# GET ONE PROFILE
# ---------------------------------------------------------

@router.get("/{profile_id}", response_model=ProfileResponse)
def get_profile(profile_id: int):
    profile = profiles_db.get(profile_id)

    if profile is None:
        raise HTTPException(
            status_code=404,
            detail="Profile not found.",
        )

    return profile


# ---------------------------------------------------------
# UPDATE PROFILE
# ---------------------------------------------------------

@router.put("/{profile_id}", response_model=ProfileResponse)
def update_profile(profile_id: int, profile_update: ProfileUpdate):
    if profile_id not in profiles_db:
        raise HTTPException(
            status_code=404,
            detail="Profile not found.",
        )

    update_data = profile_update.model_dump(exclude_unset=True)

    if "email" in update_data:
        for existing_id, existing_profile in profiles_db.items():
            if (
                existing_id != profile_id
                and existing_profile["email"].lower()
                == update_data["email"].lower()
            ):
                raise HTTPException(
                    status_code=409,
                    detail="Another profile already uses this email.",
                )

    profiles_db[profile_id].update(update_data)

    return profiles_db[profile_id]


# ---------------------------------------------------------
# DELETE PROFILE
# ---------------------------------------------------------

@router.delete("/{profile_id}")
def delete_profile(profile_id: int):
    if profile_id not in profiles_db:
        raise HTTPException(
            status_code=404,
            detail="Profile not found.",
        )

    del profiles_db[profile_id]

    return {
        "message": "Profile deleted successfully.",
        "profile_id": profile_id,
    }


# ---------------------------------------------------------
# SEARCH PROFILES BY SKILL
# ---------------------------------------------------------

@router.get("/search/by-skill", response_model=List[ProfileResponse])
def search_profiles_by_skill(
    skill: str = Query(..., min_length=1)
):
    search_skill = skill.lower()

    results = []

    for profile in profiles_db.values():
        profile_skills = [
            item.lower()
            for item in profile.get("skills", [])
        ]

        if search_skill in profile_skills:
            results.append(profile)

    return results


# ---------------------------------------------------------
# SEARCH PROFILES BY INTEREST
# ---------------------------------------------------------

@router.get("/search/by-interest", response_model=List[ProfileResponse])
def search_profiles_by_interest(
    interest: str = Query(..., min_length=1)
):
    search_interest = interest.lower()

    results = []

    for profile in profiles_db.values():
        profile_interests = [
            item.lower()
            for item in profile.get("interests", [])
        ]

        if search_interest in profile_interests:
            results.append(profile)

    return results


# ---------------------------------------------------------
# PROFILE SUMMARY
# ---------------------------------------------------------

@router.get("/{profile_id}/summary")
def get_profile_summary(profile_id: int):
    profile = profiles_db.get(profile_id)

    if profile is None:
        raise HTTPException(
            status_code=404,
            detail="Profile not found.",
        )

    return {
        "profile_id": profile["profile_id"],
        "full_name": profile["full_name"],
        "designation": profile.get("designation"),
        "organization": profile.get("organization"),
        "skills_count": len(profile.get("skills", [])),
        "certificates_count": len(profile.get("certificates", [])),
        "qualifications_count": len(profile.get("qualifications", [])),
        "experience_count": len(profile.get("work_experience", [])),
        "interests_count": len(profile.get("interests", [])),
    }
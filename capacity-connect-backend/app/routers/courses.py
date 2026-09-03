from datetime import datetime
from typing import List

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field


router = APIRouter(
    prefix="/courses",
    tags=["Courses"]
)


class CourseCreate(BaseModel):
    title: str = Field(..., min_length=2)
    description: str = ""
    subject: str = ""
    difficulty: str = "Beginner"
    duration_hours: float = Field(0, ge=0)
    trainer_id: int = Field(..., gt=0)


class CourseUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    subject: str | None = None
    difficulty: str | None = None
    duration_hours: float | None = Field(None, ge=0)
    trainer_id: int | None = Field(None, gt=0)


class CourseResponse(CourseCreate):
    id: int
    created_at: datetime


courses_db = {}
next_course_id = 1


@router.post("/", response_model=CourseResponse, status_code=201)
def create_course(course: CourseCreate):
    global next_course_id

    new_course = {
        "id": next_course_id,
        **course.model_dump(),
        "created_at": datetime.utcnow(),
    }

    courses_db[next_course_id] = new_course
    next_course_id += 1

    return new_course


@router.get("/", response_model=List[CourseResponse])
def get_courses():
    return list(courses_db.values())


@router.get("/search", response_model=List[CourseResponse])
def search_courses(
    subject: str | None = Query(default=None),
    difficulty: str | None = Query(default=None),
):
    results = list(courses_db.values())

    if subject:
        results = [
            course
            for course in results
            if subject.lower() in course["subject"].lower()
        ]

    if difficulty:
        results = [
            course
            for course in results
            if course["difficulty"].lower() == difficulty.lower()
        ]

    return results


@router.get("/{course_id}", response_model=CourseResponse)
def get_course(course_id: int):
    course = courses_db.get(course_id)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found"
        )

    return course


@router.put("/{course_id}", response_model=CourseResponse)
def update_course(course_id: int, course_update: CourseUpdate):
    course = courses_db.get(course_id)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found"
        )

    update_data = course_update.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        course[key] = value

    return course


@router.delete("/{course_id}")
def delete_course(course_id: int):
    course = courses_db.pop(course_id, None)

    if not course:
        raise HTTPException(
            status_code=404,
            detail="Course not found"
        )

    return {
        "message": "Course deleted successfully",
        "course_id": course_id
    }
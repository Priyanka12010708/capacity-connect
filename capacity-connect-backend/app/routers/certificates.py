from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Certificate

router = APIRouter(
    prefix="/certificates",
    tags=["Certificates"]
)


@router.get("/", response_model=List[dict])
def get_certificates(db: Session = Depends(get_db)):
    certificates = db.query(Certificate).all()

    return [
        {
            "id": certificate.id,
            "trainee_id": certificate.trainee_id,
            "course_id": certificate.course_id,
            "title": certificate.title,
            "certificate_id": certificate.certificate_id,
            "issued_date": certificate.issued_date,
        }
        for certificate in certificates
    ]


@router.post("/", response_model=dict)
def create_certificate(
    trainee_id: int,
    course_id: int,
    title: str,
    certificate_id: str,
    db: Session = Depends(get_db)
):
    certificate = Certificate(
        trainee_id=trainee_id,
        course_id=course_id,
        title=title,
        certificate_id=certificate_id
    )

    db.add(certificate)
    db.commit()
    db.refresh(certificate)

    return {
        "message": "Certificate created successfully",
        "certificate": {
            "id": certificate.id,
            "trainee_id": certificate.trainee_id,
            "course_id": certificate.course_id,
            "title": certificate.title,
            "certificate_id": certificate.certificate_id,
            "issued_date": certificate.issued_date,
        }
    }
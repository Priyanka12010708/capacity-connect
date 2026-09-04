from fastapi import APIRouter

router = APIRouter(
    prefix="/feedback",
    tags=["Feedback"]
)


@router.get("/")
def get_feedback():
    return {
        "message": "Feedback endpoint is working"
    }
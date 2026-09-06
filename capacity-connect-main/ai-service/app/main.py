from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.competency import recommend_trainers
from app.skill_gap import analyze_skill_gap
from app.recommendation import recommend_learning_resources
from app.quiz import generate_quiz
from app.chatbot import get_chatbot_response


app = FastAPI(
    title="Capacity Connect AI Service",
    description="AI services for competency mapping, skill-gap analysis, and learning recommendations.",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# Request Models
# --------------------------------------------------

class CompetencyRequest(BaseModel):
    required_skills: list[str]


class SkillGapRequest(BaseModel):
    current_skills: list[str]
    required_skills: list[str]


class LearningRecommendationRequest(BaseModel):
    missing_skills: list[str]

class TrainingPlanRequest(BaseModel):
    current_skills: list[str]
    required_skills: list[str]

class QuizRequest(BaseModel):
    skill: str
    number_of_questions: int = 2

class ChatbotRequest(BaseModel):
    question: str


# --------------------------------------------------
# Basic Endpoints
# --------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "Capacity Connect AI Service is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }




# --------------------------------------------------
# Competency Mapping
# --------------------------------------------------

@app.post("/competency/recommend")
def competency_recommend(request: CompetencyRequest):
    result = recommend_trainers(
        request.required_skills
    )

    return result


# --------------------------------------------------
# Skill Gap Analysis
# --------------------------------------------------

@app.post("/skill-gap/analyze")
def skill_gap_analyze(request: SkillGapRequest):
    result = analyze_skill_gap(
        request.current_skills,
        request.required_skills
    )

    return result


# --------------------------------------------------
# Learning Recommendations
# --------------------------------------------------

@app.post("/learning/recommend")
def learning_recommend(request: LearningRecommendationRequest):
    result = recommend_learning_resources(
        request.missing_skills
    )

    return result


@app.post("/training-plan")
def training_plan(request: TrainingPlanRequest):

    # Step 1: Analyze skill gap
    skill_gap = analyze_skill_gap(
        request.current_skills,
        request.required_skills
    )

    # Step 2: Get missing skills
    missing_skills = skill_gap["missing_skills"]

    # Step 3: Recommend learning resources
    learning_recommendations = recommend_learning_resources(
        missing_skills
    )

    # Step 4: Recommend trainers based on required skills
    trainer_recommendations = recommend_trainers(
        request.required_skills
    )

    return {
        "current_skills": request.current_skills,
        "required_skills": request.required_skills,
        "matched_skills": skill_gap["matched_skills"],
        "missing_skills": missing_skills,
        "skill_gap_count": skill_gap["skill_gap_count"],
        "recommended_trainers": trainer_recommendations,
        "learning_recommendations": learning_recommendations["recommendations"]
    }

@app.post("/quiz/generate")
def quiz_generate(request: QuizRequest):

    result = generate_quiz(
        request.skill,
        request.number_of_questions
    )

    return result 

@app.post("/chatbot")
def chatbot(request: ChatbotRequest):

    result = get_chatbot_response(
        request.question
    )

    return result
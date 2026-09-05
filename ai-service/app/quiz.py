from typing import List
from pydantic import BaseModel


class QuizQuestion(BaseModel):
    question: str
    options: List[str]
    correct_answer: str
    explanation: str
    difficulty: str


QUIZ_DATABASE = {
    "python": [
        {
            "question": "Which keyword is used to define a function in Python?",
            "options": [
                "function",
                "def",
                "func",
                "define"
            ],
            "correct_answer": "def",
            "explanation": "Python uses the def keyword to define a function.",
            "difficulty": "Beginner"
        },
        {
            "question": "Which data type stores key-value pairs in Python?",
            "options": [
                "List",
                "Tuple",
                "Dictionary",
                "Set"
            ],
            "correct_answer": "Dictionary",
            "explanation": "A Python dictionary stores data as key-value pairs.",
            "difficulty": "Beginner"
        }
    ],

    "machine learning": [
        {
            "question": "Which type of learning uses labelled training data?",
            "options": [
                "Supervised Learning",
                "Unsupervised Learning",
                "Reinforcement Learning",
                "Transfer Learning"
            ],
            "correct_answer": "Supervised Learning",
            "explanation": "Supervised learning trains models using labelled examples.",
            "difficulty": "Beginner"
        },
        {
            "question": "Which algorithm is commonly used for classification?",
            "options": [
                "Linear Regression",
                "Logistic Regression",
                "K-Means",
                "PCA"
            ],
            "correct_answer": "Logistic Regression",
            "explanation": "Logistic Regression is commonly used for binary and multiclass classification.",
            "difficulty": "Intermediate"
        }
    ],

    "docker": [
        {
            "question": "What is Docker primarily used for?",
            "options": [
                "Database management",
                "Containerization",
                "Image editing",
                "Web browsing"
            ],
            "correct_answer": "Containerization",
            "explanation": "Docker packages applications and their dependencies into containers.",
            "difficulty": "Beginner"
        }
    ],

    "aws": [
        {
            "question": "What does AWS stand for?",
            "options": [
                "Amazon Web Services",
                "Advanced Web System",
                "Amazon Web System",
                "Application Web Services"
            ],
            "correct_answer": "Amazon Web Services",
            "explanation": "AWS stands for Amazon Web Services.",
            "difficulty": "Beginner"
        }
    ]
}


def generate_quiz(skill: str, number_of_questions: int = 2):

    normalized_skill = skill.strip().lower()

    questions = QUIZ_DATABASE.get(
        normalized_skill,
        []
    )

    if not questions:
        return {
            "skill": skill,
            "questions": [],
            "message": "No quiz questions available for this skill yet."
        }

    selected_questions = questions[:number_of_questions]

    return {
        "skill": skill,
        "number_of_questions": len(selected_questions),
        "questions": selected_questions
    }
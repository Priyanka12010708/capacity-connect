from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


# Load AI embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# Knowledge base for Capacity Connect
KNOWLEDGE_BASE = [
    {
        "question": "What is Capacity Connect?",
        "answer": "Capacity Connect is a digital capacity building and learning management portal that helps users identify skill gaps, find suitable trainers, receive personalized learning recommendations, and assess their skills."
    },
    {
        "question": "What is competency mapping?",
        "answer": "Competency mapping identifies the skills required for a role and matches them with the skills and expertise of available trainers."
    },
    {
        "question": "What is a skill gap?",
        "answer": "A skill gap is the difference between the skills a trainee currently has and the skills required for a particular role or learning objective."
    },
    {
        "question": "How does the system identify skill gaps?",
        "answer": "The system compares a trainee's current skills with the required skills and identifies which required skills are missing. Semantic similarity is also used to recognize related skill names and abbreviations."
    },
    {
        "question": "How does the system recommend trainers?",
        "answer": "The system uses semantic similarity between required skills and trainer skills to identify trainers whose expertise best matches the training requirements."
    },
    {
        "question": "How can I find a trainer for my required skills?",
        "answer": "Enter the skills required for your training objective. The competency mapping system compares those skills with trainer expertise and ranks the most suitable trainers."
    },
    {
        "question": "How does the learning recommendation work?",
        "answer": "The learning recommendation engine compares missing skills with available learning resources and recommends resources that are most relevant to those skills."
    },
    {
        "question": "What is a quiz generator?",
        "answer": "The quiz generator creates assessment questions for supported skills and provides multiple-choice options, correct answers, explanations, and difficulty levels."
    },
    {
        "question": "How does the quiz generator work?",
        "answer": "The quiz generator receives a skill or topic and returns relevant assessment questions with answer options, the correct answer, an explanation, and a difficulty level."
    },
    {
        "question": "What skills are currently supported?",
        "answer": "The current prototype includes skills such as Python, Machine Learning, AWS, Docker, Data Science, and Deep Learning."
    },
    {
        "question": "What AI model is used?",
        "answer": "The system uses the all-MiniLM-L6-v2 sentence-transformer model to convert skills and questions into embeddings and calculate semantic similarity."
    },
    {
        "question": "What is semantic similarity?",
        "answer": "Semantic similarity measures how closely two pieces of text are related in meaning. Capacity Connect uses it to match related skills, trainer expertise, learning resources, and chatbot questions."
    },
    {
        "question": "What happens after a skill gap is identified?",
        "answer": "The missing skills are passed to the learning recommendation engine, which recommends relevant learning resources. The system can also recommend trainers based on the required skills."
    },
    {
    "question": "Can the system understand ML as Machine Learning?",
    "answer": "Yes. The system can recognize common skill abbreviations such as ML for Machine Learning, AI for Artificial Intelligence, DL for Deep Learning, and K8s for Kubernetes."
    },
    {
        "question": "Can the system understand skill abbreviations?",
        "answer": "Yes. The skill gap analyzer includes normalization for common abbreviations such as ML for Machine Learning, AI for Artificial Intelligence, DL for Deep Learning, and K8s for Kubernetes."
    },
    {
        "question": "What does the training plan contain?",
        "answer": "The training plan combines current skills, required skills, matched skills, missing skills, skill-gap count, recommended trainers, and learning recommendations."
    }
]


def get_chatbot_response(user_question: str):

    if not user_question or not user_question.strip():
        return {
            "question": user_question,
            "answer": "Please enter a question.",
            "match_score": 0
        }

    # Convert user question into embedding
    question_embedding = model.encode([user_question])

    # Convert knowledge-base questions into embeddings
    knowledge_questions = [
        item["question"]
        for item in KNOWLEDGE_BASE
    ]

    knowledge_embeddings = model.encode(
        knowledge_questions
    )

    # Calculate semantic similarity
    similarities = cosine_similarity(
        question_embedding,
        knowledge_embeddings
    )[0]

    best_index = similarities.argmax()
    best_score = float(similarities[best_index])

    # Minimum confidence threshold
    if best_score < 0.45:
        return {
            "question": user_question,
            "answer": "I don't have enough information to answer that question yet.",
            "match_score": round(best_score * 100, 2)
        }

    best_answer = KNOWLEDGE_BASE[best_index]["answer"]

    return {
        "question": user_question,
        "answer": best_answer,
        "match_score": round(best_score * 100, 2)
    }
import json
from pathlib import Path

from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


# Load the AI embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# Find trainers.json
DATA_FILE = Path(__file__).parent.parent / "data" / "trainers.json"


def load_trainers():
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def recommend_trainers(required_skills):
    trainers = load_trainers()

    # Convert required skills into one sentence
    required_text = ", ".join(required_skills)

    # Create embedding for required skills
    required_embedding = model.encode([required_text])

    results = []

    for trainer in trainers:

        # Convert trainer skills into one sentence
        trainer_text = ", ".join(trainer["skills"])

        # Create embedding for trainer skills
        trainer_embedding = model.encode([trainer_text])

        # Calculate similarity
        similarity = cosine_similarity(
            required_embedding,
            trainer_embedding
        )[0][0]

        score = round(float(similarity) * 100, 2)

        results.append({
            "trainer_id": trainer["trainer_id"],
            "name": trainer["name"],
            "match_score": score,
            "experience": trainer["experience"]
        })

    # Highest score first
    results.sort(
        key=lambda trainer: trainer["match_score"],
        reverse=True
    )

    return results
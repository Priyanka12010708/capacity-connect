from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


# Load the AI embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# Common abbreviations and alternative names
SKILL_ALIASES = {
    "ml": "machine learning",
    "ai": "artificial intelligence",
    "dl": "deep learning",
    "ds": "data science",
    "aws cloud": "aws",
    "k8s": "kubernetes",
    "js": "javascript",
    "ts": "typescript"
}


def normalize_skill(skill):
    """
    Convert common skill abbreviations into standard names.
    """
    skill = skill.strip().lower()

    return SKILL_ALIASES.get(skill, skill)


def analyze_skill_gap(current_skills, required_skills):
    """
    Analyze the trainee's skill gap using:
    1. Skill alias normalization
    2. Semantic similarity
    """

    if not current_skills or not required_skills:
        return {
        "current_skills": current_skills,
        "required_skills": required_skills,
        "matched_skills": [],
        "missing_skills": required_skills,
        "skill_gap_count": len(required_skills),
        "message": "Please provide both current skills and required skills for accurate skill-gap analysis."
    }

    # Normalize trainee skills
    normalized_current = [
        normalize_skill(skill)
        for skill in current_skills
    ]

    # Normalize required skills
    normalized_required = [
        normalize_skill(skill)
        for skill in required_skills
    ]

    # Create embeddings
    current_embeddings = model.encode(normalized_current)
    required_embeddings = model.encode(normalized_required)

    matched_skills = []
    missing_skills = []

    for i, required_skill in enumerate(normalized_required):

        # Exact normalized match
        if required_skill in normalized_current:
            matched_skills.append(required_skills[i])
            continue

        # Semantic similarity
        similarities = cosine_similarity(
            [required_embeddings[i]],
            current_embeddings
        )[0]

        best_score = max(similarities)

        if best_score >= 0.60:
            matched_skills.append(required_skills[i])
        else:
            missing_skills.append(required_skills[i])

    return {
        "current_skills": current_skills,
        "required_skills": required_skills,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "skill_gap_count": len(missing_skills)
    }
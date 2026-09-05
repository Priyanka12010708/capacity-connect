from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# Load the AI embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


# Sample learning resources
LEARNING_RESOURCES = [
    {
        "resource_id": "COURSE001",
        "title": "Machine Learning Fundamentals",
        "skill": "Machine Learning",
        "type": "Course",
        "level": "Beginner",
        "url": "https://developers.google.com/machine-learning/crash-course"
    },
    {
        "resource_id": "COURSE002",
        "title": "Advanced Machine Learning",
        "skill": "Machine Learning",
        "type": "Course",
        "level": "Advanced",
        "url": "https://scikit-learn.org/stable/user_guide.html"
    },
    {
        "resource_id": "COURSE003",
        "title": "AWS Cloud Practitioner",
        "skill": "AWS",
        "type": "Course",
        "level": "Beginner",
        "url": "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/"
    },
    {
        "resource_id": "COURSE004",
        "title": "AWS Solutions Architecture",
        "skill": "AWS",
        "type": "Course",
        "level": "Advanced",
        "url": "https://aws.amazon.com/architecture/"
    },
    {
        "resource_id": "COURSE005",
        "title": "Docker for Beginners",
        "skill": "Docker",
        "type": "Course",
        "level": "Beginner",
        "url": "https://docs.docker.com/get-started/"
    },
    {
        "resource_id": "COURSE006",
        "title": "Python Programming",
        "skill": "Python",
        "type": "Course",
        "level": "Beginner",
        "url": "https://docs.python.org/3/tutorial/"
    },
    {
        "resource_id": "COURSE007",
        "title": "Data Science Fundamentals",
        "skill": "Data Science",
        "type": "Course",
        "level": "Beginner",
        "url": "https://www.kaggle.com/learn"
    },
    {
        "resource_id": "COURSE008",
        "title": "Deep Learning with Python",
        "skill": "Deep Learning",
        "type": "Course",
        "level": "Advanced",
        "url": "https://www.tensorflow.org/learn"
    }
]


def recommend_learning_resources(missing_skills):
    """
    Recommend learning resources based on missing skills.
    Uses semantic similarity between missing skills and
    learning resource skills.
    """

    if not missing_skills:
        return {
            "missing_skills": [],
            "recommendations": []
        }

    resource_skills = [
        resource["skill"]
        for resource in LEARNING_RESOURCES
    ]

    missing_embeddings = model.encode(missing_skills)
    resource_embeddings = model.encode(resource_skills)

    recommendations = []

    for i, missing_skill in enumerate(missing_skills):

        similarities = cosine_similarity(
            [missing_embeddings[i]],
            resource_embeddings
        )[0]

        # Get best matching resources
        ranked_indexes = similarities.argsort()[::-1]

        skill_recommendations = []

        for index in ranked_indexes[:3]:

            score = float(similarities[index])

            if score >= 0.40:
                resource = LEARNING_RESOURCES[index]

                skill_recommendations.append({
                    "resource_id": resource["resource_id"],
                    "title": resource["title"],
                    "skill": resource["skill"],
                    "type": resource["type"],
                    "level": resource["level"],
                    "url": resource["url"],
                    "match_score": round(score * 100, 2)
                })

        recommendations.append({
            "missing_skill": missing_skill,
            "resources": skill_recommendations
        })

    return {
        "missing_skills": missing_skills,
        "recommendations": recommendations
    }
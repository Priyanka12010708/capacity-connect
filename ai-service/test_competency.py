from app.competency import recommend_trainers


required_skills = [
    "Python",
    "Machine Learning",
    "Data Science"
]


results = recommend_trainers(required_skills)


for trainer in results:
    print(
        f"{trainer['name']} "
        f"→ {trainer['match_score']}%"
    )
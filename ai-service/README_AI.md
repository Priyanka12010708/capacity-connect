# Capacity Connect — AI Module

## 1. Overview

The AI module of Capacity Connect provides intelligent services for competency mapping, skill-gap analysis, learning recommendations, training-plan generation, quiz generation, and chatbot assistance.

The AI service is implemented using Python, FastAPI, Sentence Transformers, and cosine similarity.

---

## 2. AI Technologies Used

- Python
- FastAPI
- Sentence Transformers
- `all-MiniLM-L6-v2`
- Scikit-learn
- Cosine Similarity
- Rule-based skill normalization
- Curated knowledge base

---

## 3. AI Architecture

The AI service follows this flow:

User Input
   ↓
FastAPI API
   ↓
AI Processing
   ↓
Embedding / Similarity / Rule-Based Logic
   ↓
Recommendation or Analysis
   ↓
JSON Response

The system combines rule-based processing with semantic similarity.

---

## 4. Competency Mapping

### Purpose

Competency mapping identifies trainers whose skills are most relevant to the required skills.

### Method

1. Required skills are converted into text embeddings.
2. Trainer skills are converted into embeddings.
3. Cosine similarity is calculated between the required skills and trainer skills.
4. Trainers are ranked according to their similarity score.
5. The highest-scoring trainers are recommended.

### Endpoint

POST `/competency/recommend`

### Example Input

```json
{
  "required_skills": [
    "Python",
    "Machine Learning",
    "Data Science"
  ]
}
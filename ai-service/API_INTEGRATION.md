# Capacity Connect AI API Integration Guide

## Base URL

During local development:

http://127.0.0.1:8000

Swagger documentation:

http://127.0.0.1:8000/docs

---

## 1. Competency Mapping

### Endpoint

POST /competency/recommend

### Request

```json
{
  "required_skills": [
    "Python",
    "Machine Learning",
    "Data Science"
  ]
}
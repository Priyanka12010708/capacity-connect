# Capacity Connect - AI Research and Technical Explanation

## 1. AI Components Developed

The Capacity Connect AI service contains the following AI-enabled components:

1. Competency Mapping
2. Skill Gap Analysis
3. Learning Recommendation Engine
4. Trainer Recommendation
5. Integrated Training Plan
6. Quiz Generator
7. AI Chatbot

---

## 2. AI Model Used

The project uses Sentence Transformers with the:

`all-MiniLM-L6-v2`

model.

Sentence Transformers convert text such as skills, questions, and learning-resource descriptions into numerical vectors called embeddings.

These embeddings allow the system to compare the semantic meaning of different text inputs.

---

## 3. What Are Embeddings?

An embedding is a numerical representation of text.

For example:

"Machine Learning"

and

"ML"

can represent similar concepts even though the words are different.

The system converts text into embeddings and compares these embeddings to identify semantic similarity.

---

## 4. Cosine Similarity

The project uses cosine similarity to compare embeddings.

Cosine similarity measures how similar two vectors are.

A higher similarity score means the two pieces of text have more similar meaning.

The AI service uses this technique for:

- Trainer recommendation
- Skill-gap analysis
- Learning-resource recommendation
- Chatbot question matching

---

## 5. Competency Mapping

The competency mapping module recommends trainers based on the required skills.

Example:

Required skills:

- Python
- Machine Learning
- Data Science

The system:

1. Converts required skills into embeddings.
2. Converts trainer skills into embeddings.
3. Calculates semantic similarity.
4. Calculates match scores.
5. Sorts trainers from highest to lowest match.

This allows trainers to be recommended based on competency similarity rather than only exact keyword matching.

---

## 6. Skill Gap Analysis

The skill-gap analyzer compares:

- Current learner skills
- Required skills

The system first normalizes common skill abbreviations.

Examples:

- ML → Machine Learning
- AI → Artificial Intelligence
- DL → Deep Learning
- DS → Data Science
- K8s → Kubernetes

It then uses semantic similarity to identify related skills.

A similarity threshold of 0.60 is used for semantic matching.

The output contains:

- Matched skills
- Missing skills
- Skill gap count

Example:

Current skills:

- Python
- Data Science

Required skills:

- Python
- Machine Learning
- AWS
- Docker

Result:

Matched:

- Python

Missing:

- Machine Learning
- AWS
- Docker

Skill gap count:

3

---

## 7. Learning Recommendation Engine

The recommendation engine recommends learning resources for missing skills.

The system compares the missing skill with the skills associated with available learning resources.

Semantic similarity is used to rank resources.

The system returns the top relevant resources for each missing skill.

Each recommendation can contain:

- Course ID
- Course title
- Skill
- Type
- Difficulty
- Match score
- Learning URL

---

## 8. Trainer Recommendation

Trainer recommendation is integrated with competency mapping.

The system compares:

Required skills

with

Trainer expertise.

The trainers are ranked according to semantic similarity.

Example:

A learner requiring AWS, Cloud Computing, and Docker may receive a higher recommendation score for a trainer whose expertise includes AWS and cloud technologies.

---

## 9. Integrated Training Plan

The training-plan endpoint combines multiple AI components.

Input:

- Current skills
- Required skills

The system then:

1. Performs skill-gap analysis.
2. Identifies missing skills.
3. Recommends learning resources.
4. Recommends suitable trainers.
5. Creates an integrated training-plan response.

This connects the different AI modules into one workflow.

---

## 10. Quiz Generator

The quiz generator creates skill-based multiple-choice questions.

The current implementation uses a curated question database rather than generating questions using a large language model.

Each question can contain:

- Question
- Multiple-choice options
- Correct answer
- Explanation
- Difficulty level

Supported example skills include:

- Python
- Machine Learning
- AWS
- Docker

---

## 11. AI Chatbot

The chatbot uses semantic similarity to match user questions with a project knowledge base.

The process is:

1. User asks a question.
2. The question is converted into an embedding.
3. Knowledge-base entries are converted into embeddings.
4. Cosine similarity is calculated.
5. The most relevant answer is selected.
6. If the similarity is too low, the chatbot returns an uncertainty message instead of inventing an answer.

The chatbot threshold is 0.45.

This helps keep the chatbot focused on Capacity Connect-related information.

---

## 12. AI Architecture

The overall AI architecture is:

User Input
    ↓
FastAPI AI Service
    ↓
AI Processing
    ↓
Sentence Transformer
    ↓
Text Embeddings
    ↓
Cosine Similarity
    ↓
AI Decision / Ranking
    ↓
Response

Different modules use this architecture for different purposes.

---

## 13. Complete AI Workflow

Learner Current Skills
        ↓
Skill Gap Analysis
        ↓
Identify Missing Skills
        ↓
Learning Recommendations
        ↓
Trainer Recommendations
        ↓
Integrated Training Plan
        ↓
Skill-Based Quiz
        ↓
AI Chatbot Support

---

## 14. Why AI Is Used

Traditional systems often depend on exact keyword matching.

For example:

"Machine Learning"

and

"ML"

could be treated as different strings.

The Capacity Connect AI service improves this by using:

- Skill normalization
- Text embeddings
- Semantic similarity
- Ranking

This allows the system to understand related concepts more effectively.

---

## 15. Advantages of the AI Approach

### Personalized Learning

Recommendations are based on the learner's skill gaps.

### Semantic Matching

The system can identify related skills instead of relying only on exact text matches.

### Automated Recommendations

Suitable trainers and learning resources can be ranked automatically.

### Integrated Workflow

Multiple AI components work together through the training-plan API.

### Explainable Results

The system returns match scores and structured results that can be inspected by users and developers.

---

## 16. Current Limitations

The current AI implementation has some limitations:

- Trainer data is currently based on a structured dataset.
- Learning resources are based on a curated resource database.
- Quiz questions are stored in a predefined question database.
- The chatbot knowledge base is curated.
- Semantic similarity does not guarantee that two skills are truly equivalent.
- The system does not currently use a large language model for free-form generation.

---

## 17. Future Improvements

Possible future improvements include:

1. Add more trainer profiles.
2. Add more learning resources.
3. Expand the skill taxonomy.
4. Improve skill normalization.
5. Add more quiz questions.
6. Add learner performance tracking.
7. Add feedback-based recommendation improvement.
8. Use an LLM for advanced chatbot conversations.
9. Add multilingual support.
10. Continuously update the knowledge base.

---

## 18. Technologies Used

### Backend

- Python
- FastAPI
- Pydantic
- Uvicorn

### AI / Machine Learning

- Sentence Transformers
- all-MiniLM-L6-v2
- Scikit-learn
- Cosine Similarity
- Text Embeddings

### Data

- JSON-based trainer data
- Curated learning-resource database
- Curated quiz database
- Chatbot knowledge base

---

## 19. Member 3 Contribution

Member 3 is responsible for the AI-focused functionality of the project.

Major contributions include:

- AI research
- Competency mapping
- Trainer recommendation
- Skill-gap analysis
- Skill normalization
- Semantic similarity
- Learning recommendations
- Integrated training plan
- Quiz generator
- AI chatbot
- Chatbot knowledge base
- AI API integration
- AI testing and validation

---

## 20. Short Hackathon Explanation

The Capacity Connect AI service uses Sentence Transformers and semantic similarity to understand learner skills and training requirements.

It identifies skill gaps, recommends suitable learning resources and trainers, and combines these results into an integrated training plan.

The system also provides skill-based quizzes and a chatbot that answers questions about the platform.

The main advantage is that the system does not depend only on exact keyword matching. It uses semantic representations of text to identify related skills and rank relevant recommendations.

---

## 21. One-Minute Viva Answer

"Capacity Connect uses AI to personalize capacity building for learners. Our AI service uses the Sentence Transformer all-MiniLM-L6-v2 to convert skills and text into embeddings. We use cosine similarity to compare learner requirements with trainer expertise and learning resources. The skill-gap module identifies matched and missing skills, while the recommendation engine suggests suitable learning resources. These results are combined into an integrated training plan. We also developed a skill-based quiz generator and a semantic chatbot for platform support. The system uses skill normalization for common abbreviations such as ML, AI, DL, and K8s. This makes the system more flexible than simple keyword-based matching."

---

## 22. Important Technical Point

The project currently uses AI primarily for:

- Semantic understanding
- Similarity matching
- Ranking
- Recommendation

The quiz generator is currently database-driven, and the chatbot uses a curated knowledge base with semantic retrieval.

This distinction should be clearly explained during the hackathon instead of claiming that every component is generated by an LLM.
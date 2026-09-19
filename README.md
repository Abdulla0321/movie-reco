MovieMind is a full-stack, end-to-end intelligent digital asset and media recommendation platform. It combines a real-time conversational preference agent, a hybrid TF-IDF and Cosine similarity machine learning recommender, and TMDb API integrations into an interactive, glassmorphic Next.js frontend and a high-performance FastAPI backend.

---

## Key Capabilities

* **FastAPI Backend Services:** High-performance asynchronous REST API powered by Pydantic schema validation and CORS-enabled middleware routing.
* **Hybrid Machine Learning Recommender:** Custom Content-Based Filtering engine powered by Scikit-Learn vectorizers, Pandas processing, and Cosine similarity matrix operations.
* **Conversational AI Agent:** Intelligent preference-elicitation engine leveraging OpenAI GPT-4o-mini with fallback intent-parsing logic for interactive user taste discovery.
* **Glassmorphism UI/UX:** Responsive Next.js (Turbopack) frontend styled with Tailwind CSS, Lucide icons, dark frosted glass layers, and dynamic backdrop imagery.
* **Automated Data Indexing:** Real-time ingestion, filtering, and normalization of trending media assets directly from TMDb endpoints.
* **Interactive OpenAPI Sandbox:** Auto-generated Swagger UI for testing chat agents, recommendation pipelines, and payload schemas directly in the browser.

---

## Core System Features

### Real-Time Conversational AI Agent
* **Contextual Elicitation:** Tracks multi-turn conversational history to extract subtle user preferences across genres, directors, themes, and emotional moods.
* **Graceful Degradation:** Features a built-in intent-parsing fallback engine to continue serving structured genre and mood feedback if API quota limits or network restrictions occur.
* **Structured Payload Binding:** Maps unstructured chat inputs into strongly-typed Pydantic schemas for downstream similarity scoring.

### Hybrid Content-Based ML Recommender
* **Vector-Space Feature Extraction:** Transforms movie overviews, genre combinations, and thematic tags into high-dimensional TF-IDF feature matrices.
* **Cosine Similarity Scoring:** Calculates real-time distance metrics between synthesized preference vectors and TMDb trending asset datasets.
* **Top-K Ranking Pipeline:** Dynamically sorts, filters, and ranks candidate assets to deliver high-confidence recommendation queues.

### Institutional REST Gateway & Docs
* **Health Check & Telemetry:** Monitors backend operational status, ML pipeline availability, and API route health.
* **Recommendation Gateway:** `/api/recommend` endpoint handling structured preference vectors to return ranked movie records with metadata and poster links.
* **Agent Integration Point:** `/api/chat` route processing conversational payloads and returning context-aware preference evaluations.
* **Interactive Swagger Documentation:** Built-in interactive sandbox available at `http://localhost:8000/docs` for endpoint testing and API contract verification.

---

## System Status & Operational Setup

| Component | Status / Detail |
| :--- | :--- |
| **FastAPI Backend Server** | Live Python API running on `[http://127.0.0.1:8000](http://127.0.0.1:8000)` |
| **Next.js Web Frontend** | Turbopack application running on `http://localhost:3000` |
| **Interactive Docs** | Live Swagger OpenAPI documentation accessible at `/docs` |
| **Machine Learning Engine** | Active Scikit-Learn / Pandas hybrid vectorizer |
| **Data Ingestion** | Live TMDb (The Movie Database) trending media integration |

---

## Technology Stack

* **Machine Learning & Core API Layer:** Python 3.10+, FastAPI, Pydantic v2, Scikit-Learn, Pandas, NumPy, Uvicorn
* **AI & Conversational Agents:** OpenAI API (GPT-4o-mini), AsyncOpenAI client, custom regex-based intent parser
* **Frontend Web Application:** Next.js 16 (Turbopack), React, TypeScript, Tailwind CSS, Lucide React icons
* **Data Sources & Media:** TMDb API v3, custom background asset pipeline
* **Version Control & Repository:** Git, GitHub (`Abdulla0321/movie-reco`)

---

## Getting Started

### Prerequisites
* **Python 3.10+**
* **Node.js 18+** and **npm**

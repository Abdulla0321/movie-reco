from fastapi import APIRouter
from app.models.schemas import RecommendationRequest, ChatRequest
from app.core.tmdb import fetch_trending_movies
from app.ml.hybrid import ContentBasedRecommender
from app.agents.preference_agent import process_preference_chat

router = APIRouter(prefix="/api", tags=["Recommendations"])
recommender = ContentBasedRecommender()

@router.post("/chat")
async def chat_agent(req: ChatRequest):
    result = await process_preference_chat(req.message, req.history)
    return result

@router.post("/recommend")
async def get_recommendations(req: RecommendationRequest):
    trending = await fetch_trending_movies()
    query_text = f"{' '.join(req.preferences.genres)} {req.preferences.mood or ''}"
    recommendations = recommender.predict(query_text, trending, top_k=req.top_k)
    return recommendations

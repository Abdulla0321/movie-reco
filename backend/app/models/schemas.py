from pydantic import BaseModel, Field
from typing import List, Optional

class UserPreferences(BaseModel):
    genres: List[str] = Field(default_factory=list)
    mood: Optional[str] = None
    favorite_actors: List[str] = Field(default_factory=list)
    favorite_directors: List[str] = Field(default_factory=list)
    streaming_services: List[str] = Field(default_factory=list)
    min_rating: float = Field(default=6.0, ge=0.0, le=10.0)

class RecommendationRequest(BaseModel):
    user_id: Optional[str] = None
    preferences: UserPreferences
    top_k: int = 10

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    history: List[ChatMessage] = Field(default_factory=list)

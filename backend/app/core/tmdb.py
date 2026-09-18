import os
import httpx
from dotenv import load_dotenv

load_dotenv()

TMDB_API_KEY = os.getenv("TMDB_API_KEY")
BASE_URL = "https://api.themoviedb.org/3"

async def fetch_trending_movies():
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{BASE_URL}/trending/movie/week",
            params={"api_key": TMDB_API_KEY}
        )
        if response.status_code == 200:
            return response.json().get("results", [])
        return []

async def fetch_movie_details(movie_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{BASE_URL}/movie/{movie_id}",
            params={"api_key": TMDB_API_KEY}
        )
        return response.json() if response.status_code == 200 else {}

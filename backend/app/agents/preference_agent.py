import os
import json
from openai import AsyncOpenAI
from dotenv import load_dotenv

load_dotenv()
client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

async def process_preference_chat(user_message: str, history: list):
    system_prompt = """
    You are MovieMind's AI Preference Elicitation Agent. Talk naturally with the user about movies.
    Extract their preferred genres, mood, actors, directors, and minimum ratings.
    Respond with a JSON object:
    {
        "chat_response": "Your friendly conversational reply",
        "preferences": {
            "genres": ["Sci-Fi", "Action"],
            "mood": "adventurous",
            "favorite_actors": [],
            "favorite_directors": [],
            "min_rating": 7.0
        }
    }
    """
    messages = [{"role": "system", "content": system_prompt}]
    for msg in history:
        messages.append({"role": msg.role, "content": msg.content})
    messages.append({"role": "user", "content": user_message})

    response = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages,
        response_format={"type": "json_object"}
    )
    
    return json.loads(response.choices[0].message.content)

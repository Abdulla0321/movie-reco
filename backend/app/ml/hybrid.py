import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class ContentBasedRecommender:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)

    def predict(self, preferences_text: str, movies: list, top_k: int = 10):
        if not movies:
            return []
        
        df = pd.DataFrame(movies)
        df['corpus'] = df['title'].fillna('') + " " + df['overview'].fillna('')
        
        tfidf_matrix = self.vectorizer.fit_transform(df['corpus'])
        pref_vec = self.vectorizer.transform([preferences_text])
        
        sim_scores = cosine_similarity(pref_vec, tfidf_matrix).flatten()
        df['match_score'] = (sim_scores * 100).round(1)
        
        ranked = df.sort_values(by='match_score', ascending=False)
        return ranked.head(top_k).to_dict(orient='records')

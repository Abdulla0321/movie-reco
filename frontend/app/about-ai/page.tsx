"use client";
import Sidebar from "@/components/Sidebar";
import { Cpu, Network, Sparkles, Database } from "lucide-react";

export default function AboutAIPage() {
  return (
    <div className="flex min-h-screen bg-brand-bg text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 space-y-8 max-w-5xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-accent rounded-2xl">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">How MovieMind AI Works</h1>
            <p className="text-xs text-gray-400">Understanding our multi-agent architecture & hybrid recommender system</p>
          </div>
        </div>

        {/* Concept Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-surface/80 border border-white/10 p-6 rounded-3xl backdrop-blur-xl space-y-3">
            <div className="flex items-center gap-2 text-brand-pink font-semibold">
              <Sparkles className="w-5 h-5" /> Conversational Preference Elicitation
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Instead of static filters, our GPT-4o-mini powered <b>Preference Agent</b> engages in natural dialogue to extract genres, emotional mood, actors, and directors into a structured JSON preference model.
            </p>
          </div>

          <div className="bg-brand-surface/80 border border-white/10 p-6 rounded-3xl backdrop-blur-xl space-y-3">
            <div className="flex items-center gap-2 text-brand-purple font-semibold">
              <Network className="w-5 h-5" /> TF-IDF + Cosine Content Filtering
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Movie metadata (overviews, keywords, genres) is vectorized using <b>Term Frequency-Inverse Document Frequency (TF-IDF)</b>. Cosine similarity matches user interest vectors against candidate films.
            </p>
          </div>
        </div>

        {/* Multi-Agent Diagram Box */}
        <div className="bg-brand-surface/80 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-brand-orange" /> Multi-Agent Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="block text-brand-pink font-bold mb-1">1. Preference Agent</span>
              <span className="text-xs text-gray-400">Elicits user input & outputs structured JSON queries.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="block text-brand-purple font-bold mb-1">2. Hybrid ML Engine</span>
              <span className="text-xs text-gray-400">Ranks TMDb candidates via TF-IDF & SVD matrix factorization.</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="block text-brand-orange font-bold mb-1">3. Explanation Agent</span>
              <span className="text-xs text-gray-400">Generates personalized "Why this movie?" rationale.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

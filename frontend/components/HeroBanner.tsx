"use client";
import { Sparkles, Play } from "lucide-react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-r from-brand-purple/80 via-brand-surface to-brand-pink/30 p-8 flex flex-col justify-end border border-white/10 shadow-2xl">
      <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-brand-orange border border-white/10">
        <Sparkles className="w-4 h-4" /> AI Recommendation Engine Active
      </div>

      <div className="max-w-xl space-y-3 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
          Discover Movies Matched to Your Mood
        </h1>
        <p className="text-sm text-gray-300 line-clamp-2">
          Chat naturally with our AI preference agent or let our hybrid matrix factorization engine curate your personalized movie queue.
        </p>

        <div className="flex items-center gap-4 pt-2">
          <Link
            href="/chat"
            className="flex items-center gap-2 bg-gradient-accent px-6 py-3 rounded-2xl font-bold text-sm text-white shadow-lg shadow-brand-purple/50 hover:scale-105 transition-transform"
          >
            <Play className="w-4 h-4 fill-white" /> Start AI Preference Chat
          </Link>
          <Link
            href="/about-ai"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-sm text-white border border-white/10 transition-colors"
          >
            How it works
          </Link>
        </div>
      </div>
    </div>
  );
}

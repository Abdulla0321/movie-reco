"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.chat_response },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 flex flex-col h-screen">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-600/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">MovieMind AI Preference Agent</h1>
            <p className="text-xs text-gray-300">Tell me your mood, favorite genres, actors, or directors.</p>
          </div>
        </div>

        <div className="flex-1 bg-white/10 border border-white/15 rounded-3xl p-6 overflow-y-auto space-y-4 mb-4 backdrop-blur-xl shadow-2xl">
          {messages.length === 0 && (
            <div className="text-center text-gray-300 my-auto py-20">
              <Bot className="w-12 h-12 mx-auto mb-3 text-purple-400" />
              <p className="font-semibold text-lg text-white">Hey there! What kind of movie are you in the mood for today?</p>
              <p className="text-xs text-gray-400 mt-1">Try: "I want a dark sci-fi thriller with Christopher Nolan vibes"</p>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`p-2 rounded-xl ${m.role === "user" ? "bg-purple-600" : "bg-white/10"}`}>
                {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-4 rounded-2xl max-w-lg text-sm ${m.role === "user" ? "bg-purple-600/40 border border-purple-500/50" : "bg-black/30 border border-white/10"}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div className="text-xs text-gray-300 animate-pulse">AI Agent is evaluating preferences...</div>}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask for recommendations or express your taste..."
            className="flex-1 bg-black/40 border border-white/20 rounded-full px-6 py-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 backdrop-blur-md"
          />
          <button onClick={sendMessage} className="bg-purple-600 hover:bg-purple-500 p-4 rounded-full text-white shadow-lg shadow-purple-600/40 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}

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
    <div className="flex min-h-screen bg-brand-bg text-white">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 flex flex-col h-screen">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-accent rounded-2xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">MovieMind AI Preference Agent</h1>
            <p className="text-xs text-gray-400">Tell me your mood, favorite genres, actors, or directors.</p>
          </div>
        </div>

        {/* Chat History Window */}
        <div className="flex-1 bg-brand-surface/80 border border-white/10 rounded-3xl p-6 overflow-y-auto space-y-4 mb-4 backdrop-blur-xl">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 my-auto py-20">
              <Bot className="w-12 h-12 mx-auto mb-3 text-brand-purple" />
              <p className="font-semibold text-lg text-white">Hey there! What kind of movie are you in the mood for today?</p>
              <p className="text-xs text-gray-500 mt-1">Try: "I want a dark sci-fi thriller with Christopher Nolan vibes"</p>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`p-2 rounded-xl ${m.role === "user" ? "bg-brand-purple" : "bg-white/10"}`}>
                {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-4 rounded-2xl max-w-lg text-sm ${m.role === "user" ? "bg-brand-purple/40 border border-brand-purple/50" : "bg-white/5 border border-white/10"}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div className="text-xs text-gray-400 animate-pulse">AI Agent is evaluating preferences...</div>}
        </div>

        {/* Input Bar */}
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask for recommendations or express your taste..."
            className="flex-1 bg-brand-surface border border-white/15 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-brand-purple"
          />
          <button onClick={sendMessage} className="bg-gradient-accent p-4 rounded-full text-white shadow-lg shadow-brand-purple/40">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}

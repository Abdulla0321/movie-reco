"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Bookmark, Cpu } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Chat Agent", href: "/chat", icon: Compass },
  { name: "My List", href: "/my-list", icon: Bookmark },
  { name: "About AI", href: "/about-ai", icon: Cpu },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-brand-surface/90 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between fixed left-0 top-0 z-50">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-brand-purple/40">
            🎬
          </div>
          <span className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            MovieMind
          </span>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-400">
        <p className="font-semibold text-brand-pink mb-1">Good movies.</p>
        <p className="italic">Better moods.</p>
      </div>
    </aside>
  );
}

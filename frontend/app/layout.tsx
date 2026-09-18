import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieMind - AI Movie Recommendations",
  description: "Conversational AI Movie Recommendation Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative antialiased`}
        style={{ backgroundImage: "url('/bg-dashboard.png')" }}
      >
        <div className="min-h-screen bg-black/70 backdrop-blur-md">
          {children}
        </div>
      </body>
    </html>
  );
}

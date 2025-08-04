import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ChatbotProvider from "@/components/ChatbotProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Moving",
  description: "Rated best movers with a standard of excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Loads Voiceflow embed and exposes window.openChatbot() */}
        <ChatbotProvider />
        {children}
      </body>
    </html>
  );
}

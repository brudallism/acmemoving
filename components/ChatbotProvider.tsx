"use client";
import { useEffect } from "react";

/**
 * Loads your Voiceflow embed and exposes window.openChatbot()
 * so any button (e.g., in Hero) can open it.
 */
export default function ChatbotProvider() {
  useEffect(() => {
    // TODO: Paste your Voiceflow embed snippet here.
    // Example pattern (adjust to your provider’s API):
    // const s = document.createElement("script");
    // s.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; // example
    // s.async = true;
    // s.onload = () => {
    //   // Many providers expose something like window.voiceflow.chat
    //   (window as any).openChatbot = () =>
    //     (window as any).voiceflow?.chat?.open?.(); // update to your real call
    // };
    // document.body.appendChild(s);

    // Fallback mock so the button doesn’t do nothing during dev setup:
    (window as any).openChatbot = () => {
      alert("Voiceflow widget not configured yet.\nPaste your embed in ChatbotProvider.tsx.");
    };
  }, []);

  return null;
}

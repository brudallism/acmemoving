"use client"; // ⬅️ VERY IMPORTANT!

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      (window as any).voiceflow?.chat?.load({
        verify: { projectID: "688a8dd2bea11b930c5c6c3a" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <FAQ />
      <footer
        style={{
          textAlign: "center",
          padding: "18px 16px",
          borderTop: "1px solid #e5e7eb",
          background: "white",
        }}
      >
        © {new Date().getFullYear()} Acme Moving
      </footer>
    </>
  );
}

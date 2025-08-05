import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Script from "next/script";


export default function Page() {
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
            <Script
        src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
        type="text/javascript"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined") {
            (window as any).voiceflow?.chat?.load({
              verify: { projectID: "688a8dd2bea11b930c5c6c3a" },
              url: "https://general-runtime.voiceflow.com",
              versionID: "production",
              voice: {
                url: "https://runtime-api.voiceflow.com",
              },
            });
          }
        }}
      />
    </>
  );
}

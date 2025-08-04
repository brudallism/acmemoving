import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";

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
    </>
  );
}

"use client";

export default function Hero() {
  const openChat = () => (window as any).openChatbot?.();

  return (
    <section
      id="home"
      // Background lives on the SECTION now (behind the card)
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(3,4,94,0.35), rgba(3,4,94,0.35)), url('/hero-truck.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 16px 64px",
        }}
      >
        {/* Purple card on top of background image */}
        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            minHeight: 320,
            display: "flex",
            alignItems: "center",
            padding: 24,
            // translucent panel (tweak alpha as needed)
            background: "rgba(100, 100, 132, 0.5)", // var(--blue-3) @ 50%
            color: "white",
            backdropFilter: "saturate(110%) blur(2px)",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <h1 style={{ fontSize: 36, margin: 0, lineHeight: 1.2 }}>
              Rated Best Movers—Excellence You Can Trust
            </h1>
            <p style={{ marginTop: 10, opacity: 0.95 }}>
              Reliable crews, clear pricing, and on-time moves across town or across the state.
            </p>
            <button
              onClick={openChat}
              style={{
                marginTop: 16,
                padding: "12px 16px",
                borderRadius: 8,
                background: "var(--accent)",
                color: "#0b0c0e",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

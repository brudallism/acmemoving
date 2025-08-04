"use client";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "white",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 18, color: "var(--blue-3)" }}>Acme Moving</div>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#home">Home</a>
          <a href="#quote">Free Quote</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>
    </header>
  );
}

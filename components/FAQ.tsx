export default function FAQ() {
  const items = [
    {
      q: "How do I get a quote?",
      a: "Click “Get a Free Quote” to open our chatbot and share your details. You’ll receive an estimate in minutes.",
    },
    {
      q: "What areas do you serve?",
      a: "We handle local moves across the metro area and scheduled long-distance moves across the state.",
    },
    {
      q: "Are you insured?",
      a: "Yes—our crews and cargo are fully insured. Certificates available on request.",
    },
    {
      q: "Do you offer packing?",
      a: "Yes. Full-service packing, partial packing, and supplies are available.",
    },
  ];

  return (
    <section id="faq" style={{ background: "var(--highlight)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
        <h2 style={{ fontSize: 24, color: "var(--blue-3)", marginBottom: 12 }}>FAQ</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
          {items.map((it) => (
            <li
              key={it.q}
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 600, color: "var(--blue-2)" }}>{it.q}</div>
              <div style={{ marginTop: 6 }}>{it.a}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

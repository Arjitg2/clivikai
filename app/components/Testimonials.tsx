"use client";
import { IconStar, IconUser } from "./icons";

const testimonials = [
  { name: "Ramesh Sharma", role: "Sharma Electronics, Kolar Road", text: "My shop was invisible on Google. Within a week Clivik had my website live and my Google profile set up. Customers started calling." },
  { name: "Priya Verma", role: "Priya Beauty Parlour, Bhopal", text: "I had zero technical knowledge but they handled everything. My parlour now shows up when people search near me. Bilkul tension nahi hua." },
  { name: "Arun Singh", role: "Singh Fitness Gym, Awadhpuri", text: "Their WhatsApp automation is magic. The AI bot replies instantly and books free trials while I am training clients. Lead conversion went up without extra work." },
  { name: "Suresh Patel", role: "Patel Hardware, Hoshangabad Rd", text: "5 din mein website live ho gayi. I was shocked by how fast and smooth the whole process was. Worth every single rupee." },
  { name: "Neha Gupta", role: "Neha Boutique, MP Nagar", text: "Other agencies quoted me ₹30,000. Clivik delivered the same quality at ₹4,999. Same day WhatsApp support is a game changer." },
  { name: "Deepak Chawla", role: "Chawla Sweets, Bairagarh", text: "The WhatsApp broadcast feature is amazing. We sent our Diwali offers directly to customers and got so many repeat orders instantly." },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Testimonials header */}
        <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "#fff", fontSize: "0.875rem", fontWeight: 500, color: "#111",
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>Testimonials</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.15, letterSpacing: "-0.04em",
            maxWidth: "100%", margin: "0 auto",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            Local Business Owners <br className="desktop-br" />Who Took the First Step.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: 20, padding: "32px 24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s", cursor: "default",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 44px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"; }}
            >
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {Array.from({ length: 5 }).map((_, si) => <IconStar key={si} size={14} color="#f59e0b" />)}
              </div>
              <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.6, marginBottom: 20 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "linear-gradient(135deg,#8b5cf6,#6c3bff)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <IconUser size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0e1a" }}>{t.name}</div>
                  <div style={{ fontSize: "0.875rem", color: "#4b5563" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

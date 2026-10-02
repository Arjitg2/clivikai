"use client";
import ScrollReveal from "./ScrollReveal";
import { IconWhatsApp, IconMonitor, IconZap, IconShield } from "./icons";

const IconSettings = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const steps = [
  {
    num: "01",
    title: "Quick WhatsApp Chat",
    desc: "Tell us your needs and budget in a 2-minute chat. No long forms.",
    icon: <IconWhatsApp size={24} color="#6c3bff" />
  },
  {
    num: "02",
    title: "Free Strategy Call",
    desc: "Get honest advice and the right service recommendations without any upselling or pressure.",
    icon: <IconMonitor size={24} color="#6c3bff" />
  },
  {
    num: "03",
    title: "Build & Automate",
    desc: "We set up your website, WhatsApp, and Google profile. You just review and approve.",
    icon: <IconSettings size={24} color="#6c3bff" />
  },
  {
    num: "04",
    title: "Go Live in 5–10 Days",
    desc: "Go live, capture leads 24/7, and enjoy 15–60 days of free post-launch support.",
    icon: <IconZap size={24} color="#6c3bff" />
  }
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "#fff", fontSize: "0.875rem", fontWeight: 500, color: "#111",
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>The Process</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.15, letterSpacing: "-0.04em", marginBottom: 16,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            From WhatsApp Chat to Full Automation.
          </h2>
          <p style={{ color: "#4b5563", fontSize: "1rem" }}>Simple. Fast. Zero technical stress for you.</p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
          gap: 32 
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: "32px 24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)";
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div style={{ fontSize: "1.4em", fontWeight: 800, color: "rgba(0,0,0,0.2)" }}>{s.num}</div>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: "rgba(108,59,255,0.1)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center"
                }}>
                  {s.icon}
                </div>
              </div>
              <h3 style={{ fontSize: "1.25em", fontWeight: 800, color: "#0d0e1a", marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
      </ScrollReveal>
    </section>
  );
}

"use client";
import ScrollReveal from "./ScrollReveal";
import { IconWhatsApp, IconGlobe, IconBot, IconShield, IconZap, IconMapPin, IconSmartphone, IconCheck } from "./icons";

const services = [
  {
    icon: <IconWhatsApp size={28} color="#a78bfa" />,
    title: "WhatsApp Automation",
    price: "",
    desc: "Auto-replies, lead capture & bookings — on complete autopilot",
    bullets: [
      "Instant auto-replies",
      "Lead capture 24/7",
      "Appointment booking automation",
      "FAQ automation",
      "CRM & Google Sheets integration",
      "Follow-up automation",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconZap size={28} color="#a78bfa" />,
    title: "WhatsApp Marketing",
    price: "",
    desc: "Broadcast campaigns that drive repeat business & re-engagement",
    bullets: [
      "Promotional & festival campaigns",
      "Customer re-engagement workflows",
      "Lead nurturing campaigns",
      "Broadcast to your contact list",
      "Customer retention automation",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconGlobe size={28} color="#a78bfa" />,
    title: "Website Development",
    price: "",
    desc: "Fast, mobile-ready websites built to generate leads",
    bullets: [
      "Modern custom design",
      "Mobile-first responsive layout",
      "WhatsApp click-to-chat button",
      "Contact & lead capture forms",
      "5–7 day delivery",
      "Free deployment & hosting setup",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconBot size={28} color="#a78bfa" />,
    title: "AI Agent Solutions",
    price: "",
    desc: "24/7 AI assistant that sells, supports & qualifies leads automatically",
    bullets: [
      "AI sales agent",
      "AI customer support agent",
      "Lead qualification automation",
      "Booking automation",
      "Works directly on WhatsApp",
      "Connects to your CRM",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconMapPin size={28} color="#a78bfa" />,
    title: "Google Business Profile Optimization",
    price: "",
    desc: "Show up when local customers search your category",
    bullets: [
      "Full profile setup & optimization",
      "Google Maps visibility improvement",
      "Business info & images optimization",
      "Local SEO improvements",
      "More calls & direction requests",
    ],
    accent: "#a78bfa",
  },
];

export default function WhyWebsite() {
  return (
    <section style={{
      background: "#f2f2f7", /* Outer light background */
      padding: "var(--pricing-outer-py) var(--pricing-outer-px) 0",
    }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto", borderRadius: 40, overflow: "hidden", background: "linear-gradient(160deg, #0d0e1a 0%, #131525 100%)", padding: "var(--pricing-inner-py) var(--pricing-inner-px)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "calc(var(--sec-mb) * 1.3)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "rgba(255,255,255,0.12)", fontSize: "0.875rem", fontWeight: 500,
            color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", marginBottom: 24,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>What We Do</div>
          <h2 style={{
            fontSize: "clamp(2em, 9vw, var(--title-size))", fontWeight: 600, color: "#fff",
            lineHeight: 1.15, letterSpacing: "-0.04em",
            margin: "0 auto",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif",
          }}>
            Five Services,<br className="mobile-br" /><span className="desktop-only"> </span>
            One Goal,<br className="mobile-br" /><span className="desktop-only"> </span>
            More Customers<span className="desktop-only"> For You.</span>
          </h2>
        </div>

        {/* 3x2 card grid */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 300px",
                maxWidth: 400,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 28px",
                transition: "background 0.3s, border-color 0.3s, transform 0.3s",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(108,59,255,0.1)";
                el.style.borderColor = "rgba(108,59,255,0.35)";
                el.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(108,59,255,0.15)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: "1.35em", fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
              
              {/* Bullets */}
              <div style={{ marginTop: "auto" }}>
                {s.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <IconCheck size={16} color="#c4b5fd" />
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: "1.4" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}

"use client";
import ScrollReveal from "./ScrollReveal";
import { IconWhatsApp, IconGlobe, IconBot, IconShield, IconZap, IconMapPin, IconSmartphone, IconCheck, IconRefreshCw, IconStar } from "./icons";

const services = [
  {
    icon: <IconZap size={28} color="#a78bfa" />,
    title: "AI Speed-to-Lead",
    price: "",
    desc: "7-second automated WhatsApp replies to instantly capture and qualify every inbound lead.",
    bullets: [
      "7-Second Instant Auto-Replies",
      "24/7 Smart Lead Qualification",
      "Automated Demo & Booking Setup",
      "Instant Team Notification Alerts",
      "Direct Meta Ads & CRM Sync",
      "Intelligent FAQ Handling",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconRefreshCw size={28} color="#a78bfa" />,
    title: "30-Day Follow-Up Autopilot",
    price: "",
    desc: "Stop losing leads who don't buy on day one. Automated nurturing sequences that convert.",
    bullets: [
      "Multi-Day Nurturing Sequences",
      "Abandoned Lead & Form Recovery",
      "Automated Appointment Reminders",
      "Long-Term Prospect Re-engagement",
      "Custom Delay & Condition Timers",
      "Seamless CRM Pipeline Updating",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconWhatsApp size={28} color="#a78bfa" />,
    title: "WhatsApp Broadcast Marketing",
    price: "",
    desc: "Turn your existing contact list into instant revenue with high-conversion promotional campaigns.",
    bullets: [
      "Bulk Promotional Broadcasts",
      "Festival & Special Offer Campaigns",
      "Targeted Customer Segmentation",
      "Past Client Reactivation Workflows",
      "Official WhatsApp API Compliance",
      "Comprehensive Campaign Analytics",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconStar size={28} color="#a78bfa" />,
    title: "Google Review Automation",
    price: "",
    desc: "Build a 5-star local reputation on autopilot by capturing positive feedback immediately after service.",
    bullets: [
      "Automated Post-Service Requests",
      "5-Star Public Review Routing",
      "Private Feedback for Complaints",
      "Local SEO & Map Ranking Boost",
      "Video Testimonial Collection",
      "Hands-Free Reputation Management",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconGlobe size={28} color="#a78bfa" />,
    title: "Lead-Generation Web Design",
    price: "",
    desc: "Fast, mobile-first websites engineered specifically to capture traffic and convert it into WhatsApp leads.",
    bullets: [
      "Conversion-Optimized Layouts",
      "Mobile-First Responsive Design",
      "Persistent Click-to-Chat Buttons",
      "Custom Lead Capture Forms",
      "Lightning-Fast Loading Speeds",
      "Premium Technical Deployment",
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

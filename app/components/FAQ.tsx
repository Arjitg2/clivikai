"use client";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

const faqs = [
  { n: "01/", q: "What services does Clivik offer?", a: "We offer 5 services: WhatsApp Automation, WhatsApp Marketing, Website Development, AI Agent Solutions, and Google Business Profile Optimization. Basically everything a local business needs to get more customers and run on autopilot." },
  { n: "02/", q: "How long does the setup take?", a: "Website delivery: 7–10 days. WhatsApp automation setup: 3–5 days. AI agent setup: 5–7 days. Full Growth or Pro package: up to 10 days. We move fast without cutting corners." },
  { n: "03/", q: "Do I need any technical knowledge?", a: "Zero. You just tell us about your business on WhatsApp. We handle everything — design, development, automation setup, deployment. You just review and approve." },
  { n: "04/", q: "Can I buy just one service, not the full package?", a: "Absolutely. WhatsApp automation starts at ₹4,999 one-time. Google Business Profile setup is available as a standalone service. WhatsApp us and we'll set up exactly what you need." },
  { n: "05/", q: "Will WhatsApp automation actually work for my type of business?", a: "Yes — we've designed our automation for clinics, restaurants, salons, gyms, real estate agents, and most local service businesses. Book a free consultation and we'll tell you exactly how it applies to your business." },
  { n: "06/", q: "What is included in post-launch support?", a: "Every plan includes free post-launch support — 15 days on Starter, 30 days on Growth, 60 days on Pro. This covers changes, fixes, questions, and WhatsApp-based assistance. No extra charge." },
  { n: "07/", q: "Are there any hidden charges?", a: "No. Jo quote hoga, wahi final price. Domain, hosting, deployment — sab included hai apne apne plans mein. Koi surprise bill nahi aayega." },
  { n: "08/", q: "Do you only serve Bhopal businesses?", a: "We're based in Bhopal but work with businesses across all of Madhya Pradesh. Everything is handled over WhatsApp and email, so location is never a problem." },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "#fff", borderRadius: 16,
      border: "1px solid rgba(0,0,0,0.06)",
      overflow: "hidden",
      boxShadow: open ? "0 6px 28px rgba(0,0,0,0.09)" : "0 1px 4px rgba(0,0,0,0.04)",
      transition: "box-shadow 0.3s ease",
    }}>
      <button
        suppressHydrationWarning
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "20px 24px", minHeight: 56,
          background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
          fontFamily: "inherit", fontSize: "1rem",
        }}
      >
        <span style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0d0e1a", display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ color: "#6b7280", fontSize: "0.9375rem", fontWeight: 600, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{faq.n}</span>
          <span>{faq.q}</span>
        </span>

        {/* Plus → X — pure CSS transform */}
        <span style={{
          width: 32, height: 32, borderRadius: "50%",
          background: open ? "#6c3bff" : "rgba(0,0,0,0.06)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, transition: "background 0.3s ease",
          position: "relative",
        }}>
          {/* Horizontal bar */}
          <span style={{
            position: "absolute",
            width: 12, height: 2, borderRadius: 2,
            background: open ? "#fff" : "#1f2937",
            transition: "background 0.3s ease",
          }} />
          {/* Vertical bar — collapses when open */}
          <span style={{
            position: "absolute",
            width: 2, height: 12, borderRadius: 2,
            background: open ? "#fff" : "#1f2937",
            transform: open ? "scaleY(0)" : "scaleY(1)",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease",
            transformOrigin: "center",
          }} />
        </span>
      </button>

      {/* Smooth max-height reveal */}
      <div style={{
        maxHeight: open ? "260px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div style={{ padding: "0 24px 24px 24px", paddingLeft: "60px" }}>
          <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: "#f2f2f7", padding: "calc(var(--sec-py) * 0.75) var(--sec-px) calc(var(--pricing-outer-py) * 0.3)" }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "#fff", fontSize: "0.875rem", fontWeight: 500, color: "#111",
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>FAQ</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.15, letterSpacing: "-0.04em", maxWidth: "var(--title-max-width)",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            Got Questions?<br/>We&apos;ve Got Answers.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", gap: 16, alignItems: "start" }}>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}

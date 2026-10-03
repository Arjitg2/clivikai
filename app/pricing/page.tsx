"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";
import { IconCheck, IconShield, IconWhatsApp } from "../components/icons";

const plans = [
  {
    name: "Starter Plan",
    desc: "Great for businesses starting out",
    price: "₹3,999", featured: false, type: "One-time",
    features: [
      "Free Custom Website Mockup",
      "5-Page Premium Website",
      "Basic WhatsApp Auto-Replies",
      "Google Business Profile Setup",
      "WhatsApp Click-to-Chat Button",
      "15 Days Free Support"
    ],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Starter plan (₹3,999). Please guide me.",
  },
  {
    name: "Growth Plan",
    desc: "For businesses serious about leads",
    price: "₹14,999", featured: true, badge: "Most Popular", type: "One-time",
    features: [
      "Free Custom Website Mockup",
      "10-Page Premium Website",
      "Advanced WhatsApp Automation (Appointments, FAQs)",
      "Full Google Profile Optimization",
      "Lead Capture Integration (Google Sheets)",
      "Social Media Accounts Setup",
      "30 Days Free Support"
    ],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Growth plan (₹14,999). Please guide me.",
  },
  {
    name: "Pro AI Plan",
    desc: "Full business automation & AI",
    price: "₹29,999", featured: false, type: "One-time",
    features: [
      "Free Custom Website Mockup",
      "E-commerce or Booking Website",
      "Dedicated AI Sales Agent on WhatsApp",
      "CRM Integration",
      "Advanced Follow-up Workflows",
      "Priority Same-Day Support",
      "60 Days Free Support"
    ],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Pro AI plan (₹29,999). Please guide me.",
  },
];

const stats = [
  { n: "₹3,999", label1: "Starting", label2: "Price" },
  { n: "5 Days", label1: "Live", label2: "Delivery" },
  { n: "100%", label1: "Free", label2: "Mockup First" },
];

const faqs = [
  { q: "Do I need to pay upfront?", a: "No. We build your free mockup first. You only pay once you love the design." },
  { q: "Are there any hidden charges?", a: "Absolutely none. The price we quote is the final price — forever." },
  { q: "What is the delivery time?", a: "Starter: 7 days. Growth: 5 days. Pro: 7 days. We guarantee on-time delivery." },
  { q: "Can I upgrade my plan later?", a: "Yes! You can move from Starter to Growth or Pro at any time, paying only the difference." },
  { q: "What if I need changes after delivery?", a: "Support is included for 15–60 days depending on your plan. Minor changes are free." },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: "var(--subpage-hero-pt, 208px)",
        paddingBottom: 32,
        paddingLeft: "clamp(20px,6vw,120px)",
        paddingRight: "clamp(20px,6vw,120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(139,92,246,0.4)", color: "#fff", fontSize: "0.875rem", fontWeight: 500, marginBottom: 24 }}>
            Pricing
          </div>
          <h1 style={{ fontSize: "clamp(3.1em, 7.1vw, 5.1em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
            Smart Pricing for<br />Serious Businesses
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 480, margin: "0 auto" }}>
            Everything you need to get customers online — without overpaying.
          </p>

          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, position: "relative", zIndex: 10 }}>
            {["Free mockup", "No upfront payment", "5-day delivery"].map(trust => (
              <span key={trust} style={{
                padding: "8px 16px", borderRadius: 999, fontSize: "0.875rem", fontWeight: 700,
                background: "rgba(0,0,0,0.5)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)"
              }}>
                {trust}
              </span>
            ))}
          </div>

          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            marginTop: 48, padding: "14px 32px", minHeight: 48, borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1rem", fontWeight: 700, position: "relative", zIndex: 10,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            <span>Get Your Free Mockup</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      <section style={{ background: "#f2f2f7", padding: "0 clamp(20px,6vw,120px) 60px" }}>
        {/* Plans */}
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start", marginBottom: 60 }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: plan.featured ? "#fff" : "#12131f",
                border: plan.featured ? "2px solid #6c3bff" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 24, padding: "40px 32px",
                color: plan.featured ? "#0d0e1a" : "#fff",
                transform: plan.featured ? "scale(1.04)" : "scale(1)",
                boxShadow: plan.featured ? "0 28px 80px rgba(108,59,255,0.28)" : "0 8px 30px rgba(0,0,0,0.15)",
                display: "flex", flexDirection: "column", height: "100%",
                position: plan.featured ? "relative" : "static",
                zIndex: plan.featured ? 10 : 1,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <h2 style={{ fontSize: "1.4em", fontWeight: 800 }}>{plan.name}</h2>
                  {plan.badge && (
                    <span style={{ padding: "4px 12px", borderRadius: 999, background: "#6c3bff", color: "#fff", fontSize: "0.8125rem", fontWeight: 600 }}>{plan.badge}</span>
                  )}
                </div>
                <p style={{ fontSize: "1rem", color: plan.featured ? "#374151" : "rgba(255,255,255,0.88)", marginBottom: 28, lineHeight: 1.5, whiteSpace: "pre-line" }}>{plan.desc}</p>
                <div style={{ marginBottom: 32 }}>
                  <span style={{ fontSize: "3em", fontWeight: 900, letterSpacing: "-0.03em" }}>{plan.price}</span>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: plan.featured ? "#4b5563" : "rgba(255,255,255,0.8)", marginLeft: 8 }}>{plan.type}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36, flexGrow: 1 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95em" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <IconCheck size={10} color="#fff" />
                      </div>
                      <span style={{ color: plan.featured ? "#1f2937" : "rgba(255,255,255,0.92)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/916265022474?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", padding: "14px 20px", minHeight: 48, borderRadius: 12,
                    background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.12)",
                    color: "#fff", textDecoration: "none",
                    fontSize: "1rem", fontWeight: 700, textAlign: "center",
                    transition: "transform 0.2s, background 0.2s, opacity 0.2s",
                    border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.15)",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = plan.featured ? "#5a2fe0" : "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = plan.featured ? "#6c3bff" : "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                >
                  <span>{plan.btnText.replace("→", "").trim()}</span>
                  <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
                </a>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ background: "#0d0e1a", borderRadius: 24, padding: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 40, marginBottom: 40, textAlign: "center" }}>
            {stats.map(s => (
              <div key={s.label1}>
                <div style={{ fontSize: "3.2em", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginTop: 8 }}>{s.label1} {s.label2}</div>
              </div>
            ))}
          </div>

          {/* Not sure */}
          <div style={{ background: "#fff", borderRadius: 24, padding: "36px", textAlign: "center", border: "1px solid rgba(0,0,0,0.07)", marginBottom: 120 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "1.3em", fontWeight: 700, color: "#0d0e1a", marginBottom: 12 }}>
              <IconShield size={22} color="#6c3bff" /> Not sure which plan is right for you?
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: 28, fontSize: "1rem" }}>
              WhatsApp us — we'll suggest the best package for YOUR business. Free advice. Zero pressure.
            </p>
            <a
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20need%20help%20choosing%20the%20right%20plan%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#25D366", color: "#fff", padding: "14px 36px", minHeight: 48, borderRadius: 12, fontSize: "1rem", fontWeight: 700, textDecoration: "none", transition: "transform 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <IconWhatsApp size={18} color="#fff" />
              <span>Chat on WhatsApp</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </a>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a", marginBottom: 32, textAlign: "center", lineHeight: 1.15, letterSpacing: "-0.04em", fontFamily: "'FullerSansDT', 'Inter', sans-serif" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "1.05em", marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: "#4b5563", lineHeight: 1.7, fontSize: "1rem" }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

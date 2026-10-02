"use client";
import ScrollReveal from "./ScrollReveal";
import { IconCheck, IconShield } from "./icons";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for shops & small businesses\njust getting online",
    price: "₹3,999", featured: false, type: "One-time",
    features: ["5 Page Website", "Mobile Responsive", "Google Profile Setup", "WhatsApp Button", "Basic Local SEO", "Contact Form", "Social Links", "Free Deployment", "7 Day Delivery", "15 Day Support"],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Starter plan (₹3,999). Please guide me.",
  },
  {
    name: "Growth", 
    desc: "For businesses ready to\ngrow faster online",
    price: "₹6,999", featured: true, badge: "Most Popular", type: "One-time",
    features: ["7 Page Website", "Premium Design", "WhatsApp Auto Reply", "Appointment Booking", "Lead Capture Form", "Google Maps Integration", "Fast Loading Speed", "5 Day Delivery", "30 Day Support", "Custom Domain Setup"],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Growth plan (₹6,999). Please guide me.",
  },
  {
    name: "Pro", 
    desc: "For serious businesses wanting\ncomplete digital dominance",
    price: "₹11,999", featured: false, type: "One-time",
    features: ["10 Page Website", "Custom Premium Design", "Instagram DM Automation", "Monthly Report", "Priority Support", "Blog Section", "Advanced SEO", "Multiple Forms", "Email Notifications", "60 Day Support"],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Pro plan (₹11,999). Please guide me.",
  },
];

const stats = [
  { n: "₹3,999", label1: "Starting", label2: "Price" },
  { n: "5 Days", label1: "Live", label2: "Delivery" },
  { n: "100%", label1: "Free", label2: "Mockup First" },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{
      background: "#f2f2f7",
      padding: "var(--pricing-outer-py) var(--pricing-outer-px) 0",
    }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto", borderRadius: 40, overflow: "hidden", background: "linear-gradient(160deg, #0d0e1a 0%, #131525 100%)", padding: "var(--pricing-inner-py) var(--pricing-inner-px) calc(var(--pricing-inner-py) / 2)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "rgba(255,255,255,0.12)", fontSize: "0.875rem", fontWeight: 500,
            color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", marginBottom: 24,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>Pricing</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#fff",
            lineHeight: 1.15, letterSpacing: "-0.04em",
            maxWidth: "var(--title-max-width)", margin: "0 auto",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            Smart Pricing for Serious Businesses
          </h2>
          <p style={{
            fontSize: "1.125rem", color: "rgba(255,255,255,0.85)", marginTop: 16,
            maxWidth: 600, margin: "16px auto 0"
          }}>
            Everything you need to get customers online — without overpaying.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: 24, alignItems: "start", marginBottom: 80 }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: plan.featured ? "#fff" : "rgba(255,255,255,0.04)",
              border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24, padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)",
              color: plan.featured ? "#0d0e1a" : "#fff",
              boxShadow: plan.featured ? "0 28px 80px rgba(108,59,255,0.28)" : "none",
              boxSizing: "border-box",
              width: "100%",
            }}>
              {/* Plan name + badge: wrap badge to next line on mobile if needed */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "1.4em", fontWeight: 800, whiteSpace: "nowrap" }}>{plan.name}</h3>
                {plan.badge && (
                  <span style={{ padding: "4px 12px", borderRadius: 999, background: "#6c3bff", color: "#fff", fontSize: "0.8125rem", fontWeight: 600, whiteSpace: "nowrap", alignSelf: "center" }}>{plan.badge}</span>
                )}
              </div>
              
              <p style={{ fontSize: "1rem", color: plan.featured ? "#374151" : "rgba(255,255,255,0.88)", marginBottom: 28, lineHeight: 1.5, whiteSpace: "pre-line" }}>
                {plan.desc}
              </p>

              {/* Price: price on one line, One-time label on line below */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: "clamp(1.8em, 6.5vw, 3em)", fontWeight: 900, letterSpacing: "-0.03em", whiteSpace: "nowrap", lineHeight: 1.1 }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 500, color: plan.featured ? "#4b5563" : "rgba(255,255,255,0.85)", marginTop: 8 }}>
                  {plan.type}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "1rem" }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: plan.featured ? "#0d0e1a" : "#fff",
                      display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <IconCheck size={10} color={plan.featured ? "#fff" : "#131525"} />
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
                  width: "100%", padding: "14px 20px", minHeight: 48, borderRadius: 12, border: "none",
                  background: plan.featured ? "#6c3bff" : "#fff",
                  color: plan.featured ? "#fff" : "#0d0e1a",
                  fontSize: "1rem", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                  textDecoration: "none", textAlign: "center", boxSizing: "border-box",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <span>Get Started</span>
                <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
              </a>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--stats-grid)", gap: "var(--stats-container-gap)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "48px 0", marginBottom: 48 }}>
          {stats.map(s => (
            <div key={s.label1} style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ fontSize: "clamp(1.8em, 6vw, 4.2em)", fontWeight: 700, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1, whiteSpace: "nowrap", flexShrink: 0 }}>{s.n}</div>
              <div style={{ fontSize: "var(--stats-label)", color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>
                {s.label1}<br/>{s.label2}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Not Sure Prompt */}
        <div style={{ textAlign: "center", background: "rgba(255,255,255,0.04)", padding: "clamp(24px, 5vw, 32px) clamp(20px, 4vw, 40px)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", width: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "1.3em", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
            <IconShield size={22} color="#6ea8fe" /> Not sure which plan is right for you?
          </div>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginBottom: 24, lineHeight: 1.6 }}>
            WhatsApp us — we'll suggest the best<br/>package for YOUR business. Free advice.<br/>Zero pressure.
          </p>
          <a
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20need%20help%20choosing%20the%20right%20plan%20for%20my%20business."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              width: "100%", textAlign: "center",
              background: "#25D366", color: "#fff",
              padding: "14px 20px", minHeight: 48, borderRadius: 12,
              fontSize: "1rem", fontWeight: 700, cursor: "pointer",
              textDecoration: "none", transition: "opacity 0.2s",
              whiteSpace: "nowrap", boxSizing: "border-box",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          >
            <span>Chat on WhatsApp</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </a>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}

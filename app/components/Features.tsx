"use client";
import ScrollReveal from "./ScrollReveal";
import { IconLightning, IconSparkle, IconRefreshCw, IconCheck, IconCloud, IconBot, IconClock, IconTarget, IconGlobe, IconBarChart } from "./icons";

const rightSteps = [
  { text: "Instant WhatsApp auto-replies", icon: <IconCheck size={14} color="#fff" /> },
  { text: "24/7 AI-powered customer support", icon: <IconCheck size={14} color="#fff" /> },
  { text: "Automated appointment booking", icon: <IconCheck size={14} color="#fff" /> },
  { text: "Lead capture — no missed inquiry", icon: <IconCheck size={14} color="#fff" /> },
  { text: "CRM & Google Sheets integration", icon: <IconCheck size={14} color="#fff" /> },
];

const bottomDarkFeatures = [
  { text: "WhatsApp-first support", icon: <IconCheck size={13} color="#fff" /> },
  { text: "Same-day response", icon: <IconCheck size={13} color="#fff" /> },
  { text: "No hidden charges, ever", icon: <IconCheck size={13} color="#fff" /> },
  { text: "15–60 day post-launch support", icon: <IconCheck size={13} color="#fff" /> },
];

export default function Features() {
  return (
    <section id="features" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "var(--sec-mb)", textAlign: "var(--sec-text-align)" as any }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "#fff", fontSize: "0.875rem", fontWeight: 500, color: "#111",
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>Why Clivik</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.15, letterSpacing: "-0.04em", maxWidth: "100%",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif",
            wordBreak: "normal", overflowWrap: "normal",
          }}>
            Everything Your Business Needs<br/>
            to Grow Online
          </h2>
        </div>

        {/* Top grid: 2 col */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", gap: 24, marginBottom: 24 }}>
          {/* Left: Pricing comparison */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 32px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: "rgba(108,59,255,0.1)",
              display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
            }}>
              <IconLightning size={20} color="#6c3bff" />
            </div>
            <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#0d0e1a", marginBottom: 12, lineHeight: 1.25 }}>
              Affordable premium custom websites at a fraction of the cost.
            </h3>
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6, marginBottom: 32 }}>
              Premium Custom Websites — Without the Premium Price<br />
              Get a fully customized website at a fraction of the cost
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: "auto" }}>
              {/* Agency Row */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 80, flexShrink: 0 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", border: "1px solid #d1d5db", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#4b5563", fontWeight: 600 }}>?</div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#111" }}>Agency</span>
                </div>
                <div style={{ flex: 1, background: "#f0f0f0", borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111" }}>Rs. 50,000</span>
                </div>
              </div>
              {/* Clivik Row */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 80, flexShrink: 0 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 8, background: "linear-gradient(135deg,#8b5cf6,#6c3bff)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <IconCloud size={12} color="#fff" />
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#111" }}>Clivik</span>
                </div>
                {/* bar is ~8% of Agency's price, so proportionally much shorter */}
                <div style={{ width: "8%", minWidth: 90, background: "#4e28cc", borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>Rs. 3999</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Top Right */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 32px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 0 }}>
            <h3 style={{ fontSize: "1.3em", fontWeight: 800, color: "#0d0e1a", marginBottom: 16 }}>&quot;Your Business Replies Even While You Sleep.&quot;</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {rightSteps.map((s, i) => (
                <div key={i} style={{ fontSize: "1rem", color: "#374151", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#6c3bff", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
            <div style={{
              flex: 1, background: "#0d0e1a", borderRadius: 16, padding: "24px 20px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 120,
            }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem" }}>₹14,999</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem" }}>Growth Plan — Most Popular</div>
            </div>
          </div>
        </div>

        {/* Bottom bento: 3 col */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: 24 }}>
          {/* Card 1 */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(108,59,255,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <IconRefreshCw size={18} color="#6c3bff" />
            </div>
            <h3 style={{ fontSize: "1.35em", fontWeight: 800, color: "#0d0e1a", lineHeight: 1.3, marginBottom: 12 }}>&quot;Live in 5 Days. Guaranteed.&quot;</h3>
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6, marginBottom: 16 }}>While big agencies take 45 days — your website is live in just 5 days.</p>
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6 }}>Fast. Premium.<br/>Zero compromise on quality.</p>
          </div>

          {/* Card 2 */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(108,59,255,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <IconSparkle size={18} color="#6c3bff" />
            </div>
            <h3 style={{ fontSize: "1.35em", fontWeight: 800, color: "#0d0e1a", lineHeight: 1.3, marginBottom: 12 }}>&quot;Same Day Reply. Every Single Time.&quot;</h3>
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6, marginBottom: 16 }}>WhatsApp karo — same day response. Guaranteed.</p>
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6 }}>No waiting.<br/>No ghosting.<br/>No excuses.</p>
          </div>

          {/* Card 3 Dark */}
          <div style={{ background: "#12131f", borderRadius: 20, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.35em", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 12 }}>&quot;No Hidden Charges. Ever.&quot;</h3>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.6, marginBottom: 20 }}>Jo price bataya — wahi final price hai.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {bottomDarkFeatures.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9375rem", color: "rgba(255,255,255,0.92)" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(108,59,255,0.4)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
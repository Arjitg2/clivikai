"use client";
import { useState } from "react";
import { IconCloud, IconInstagram, IconX, IconYoutube, IconDribbble, IconBehance, IconSend, IconPhone, IconFacebook, IconWhatsApp, IconMail, IconMapPin, IconClock2 } from "./icons";

const BUSINESS_DOMAINS = [
  "E-commerce & Retail",
  "Healthcare & Wellness",
  "Real Estate & Property",
  "Education & E-learning",
  "Finance & Banking",
  "Restaurant & Food",
  "Technology & SaaS",
  "Creative & Media",
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", domain: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptUrl && scriptUrl !== "") {
        await fetch(scriptUrl, {
          method: "POST",
          body: JSON.stringify(form),
          mode: "no-cors",
        });
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again or message us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", minHeight: 48, borderRadius: 12,
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)",
    color: "#fff", fontSize: "1rem", fontFamily: "inherit", outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.875rem", fontWeight: 500,
    color: "rgba(255,255,255,0.9)", marginBottom: 8,
  };

  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 24, padding: "clamp(20px, 5vw, 40px)",
      backdropFilter: "blur(16px)",
      minWidth: "min(100%, 380px)", width: "100%",
    }}>
      {submitted ? (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#6c3bff", display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <IconSend size={28} color="#fff" />
          </div>
          <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Message Sent!</h3>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)" }}>We&apos;ll reach out to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#fff", marginBottom: 4 }}>Let&apos;s Build Something Great</h3>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginTop: -8, marginBottom: 8 }}>Takes 2 minutes to fill. We respond to every enquiry same day.</p>

          {/* Name */}
          <div>
            <label style={labelStyle}>Your Name</label>
            <input
              suppressHydrationWarning
              type="text" required placeholder="Rahul Sharma"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            />
          </div>

          {/* Business domain */}
          <div>
            <label style={labelStyle}>Your Business</label>
            <input
              suppressHydrationWarning
              type="text" required placeholder="Restaurant / Clinic / Shop / Other"
              value={form.domain} onChange={e => setForm({ ...form, domain: e.target.value })}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            />
          </div>

          {/* Phone */}
          <div>
            <label style={labelStyle}>WhatsApp Number</label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", display: "inline-flex", alignItems: "center" }}>
                <IconPhone size={16} color="rgba(255,255,255,0.7)" />
              </span>
              <input
                suppressHydrationWarning
                type="tel" required placeholder="+91 98765 43210"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                style={{ ...inputStyle, paddingLeft: 42 }}
                onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Tell Us More</label>
            <textarea
              required placeholder="What does your business do and what do you need from us?"
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              rows={4}
              style={{ ...inputStyle, resize: "vertical", minHeight: 110, lineHeight: 1.6 } as React.CSSProperties}
              onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            />
          </div>

          <button suppressHydrationWarning type="submit" disabled={isSubmitting} style={{
            padding: "14px 20px", minHeight: 48, borderRadius: 12, background: isSubmitting ? "#8b5cf6" : "#6c3bff", color: "#fff",
            border: "none", fontSize: "1rem", fontWeight: 600, cursor: isSubmitting ? "not-allowed" : "pointer",
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            transition: "all 0.2s", boxShadow: "0 4px 20px rgba(108,59,255,0.35)",
            opacity: isSubmitting ? 0.8 : 1,
          }}
            onMouseEnter={e => { if(!isSubmitting){ e.currentTarget.style.background = "#5a2fe0"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
            onMouseLeave={e => { if(!isSubmitting){ e.currentTarget.style.background = "#6c3bff"; e.currentTarget.style.transform = "translateY(0)"; } }}
          >
            <span>{isSubmitting ? "Sending..." : "Get My Mockup"}</span>
            {!isSubmitting && <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>}
          </button>
        </form>
      )}
    </div>
  );
}

const socialIcons = [
  { icon: <IconInstagram size={18} color="currentColor" />, href: "#" },
  { icon: <IconX size={18} color="currentColor" />, href: "#" },
  { icon: <IconYoutube size={18} color="currentColor" />, href: "#" },
  { icon: <IconDribbble size={18} color="currentColor" />, href: "#" },
  { icon: <IconBehance size={18} color="currentColor" />, href: "#" },
];

export default function Footer() {
  return (
    <>
      {/* Contact / CTA section */}
      <section id="get-in-touch" style={{ background: "#f2f2f7", padding: "var(--pricing-outer-py) var(--pricing-outer-px) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", ...{ borderTopLeftRadius: 40, borderTopRightRadius: 40, overflow: "hidden", background: "#0d0e1a", padding: "var(--pricing-inner-py) var(--pricing-inner-px) calc(var(--pricing-inner-py) / 2)" } }}>
          <div style={{ display: "grid", gridTemplateColumns: "var(--footer-grid-1)", gap: "clamp(24px, 5vw, 80px)", alignItems: "center" }}>
            <div>
              <h2 style={{
                fontSize: "var(--title-size)", fontWeight: 700, color: "#fff",
                lineHeight: 1.15, letterSpacing: "-0.04em", marginBottom: 24,
                fontFamily: "'FullerSansDT', 'Inter', sans-serif"
              }}>
                Ready to See Your Business Efficiency with Automation
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: 400 }}>
                Tell us about your business and we will send you a free custom website mockup within 24 hours. See it first, pay only if you love it. Zero risk involved.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#f2f2f7", padding: "0 var(--pricing-outer-px) var(--pricing-outer-px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", background: "#0d0e1a", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "calc(var(--pricing-inner-py) * 0.8) var(--pricing-inner-px) calc(var(--pricing-inner-py) / 2)", borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
          <div className="footer-cols-grid" style={{ display: "grid", gridTemplateColumns: "var(--footer-grid-2)", gap: "clamp(24px, 5vw, 80px)", marginBottom: 56 }}>
            {/* Brand */}
            <div>
              <div className="footer-brand-row" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#8b5cf6,#6c3bff)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <IconCloud size={20} color="#fff" />
                </div>
                <span style={{ fontWeight: 700, color: "#fff", fontSize: "1.4em" }}>Clivik</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 320, marginBottom: 28 }}>
                Clivik helps Indian businesses automate customer communication, generate more leads, and grow faster using modern digital solutions.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {[
                  { icon: <IconInstagram size={16} color="rgba(255,255,255,0.9)" />, text: "Instagram", href: "https://instagram.com" },
                  { icon: <IconFacebook size={16} color="rgba(255,255,255,0.9)" />, text: "Facebook", href: "https://facebook.com" },
                  { icon: <IconWhatsApp size={16} color="rgba(255,255,255,0.9)" />, text: "WhatsApp", href: "https://wa.me/916265022474" },
                ].map((s, i) => (
                  <a key={i} href={s.href} style={{
                    color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.875rem",
                    transition: "color 0.2s", display: "inline-flex", alignItems: "center", gap: 8,
                    minHeight: 44, padding: "4px 8px",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"}
                  >
                    <span className="optical-center">{s.icon}</span>
                    <span>{s.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links-pair" style={{ display: "flex", gap: "min(8vw, 100px)", flexWrap: "wrap" }}>
              {/* Pages */}
              <div>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 20 }}>Pages</h4>
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Service", href: "/terms-of-service" },
                ].map(link => (
                  <a key={link.label} href={link.href} style={{
                    display: "flex", alignItems: "center", color: "rgba(255,255,255,0.85)", textDecoration: "none",
                    fontSize: "0.9375rem", minHeight: 44, transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                  >{link.label}</a>
                ))}
              </div>

              {/* Information */}
              <div>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 20 }}>Contact Us</h4>
                {[
                  { icon: <IconWhatsApp size={16} color="rgba(255,255,255,0.85)" />, text: "+91 62650 22474", href: "https://wa.me/916265022474" },
                  { icon: <IconMail size={16} color="rgba(255,255,255,0.85)" />, text: "hello@clivik.com", href: "mailto:hello@clivik.com" },
                  { icon: <IconMapPin size={16} color="rgba(255,255,255,0.85)" />, text: "Bhopal, M.P.", href: "https://maps.google.com/?q=Bhopal,Madhya+Pradesh" },
                  { icon: <IconClock2 size={16} color="rgba(255,255,255,0.85)" />, text: "Same Day Response", href: "#" },
                ].map(link => (
                  <a key={link.text} href={link.href} style={{
                    display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.85)", textDecoration: "none",
                    fontSize: "0.9375rem", minHeight: 44, transition: "color 0.2s", lineHeight: 1.4,
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                  >
                    <span style={{ flexShrink: 0, display: "inline-flex", alignItems: "center" }}>{link.icon}</span>
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Row 1: logo + tagline */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "nowrap" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#8b5cf6,#6c3bff)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <IconCloud size={14} color="#fff" />
              </div>
              <span style={{ fontWeight: 700, color: "#fff", fontSize: "1rem", whiteSpace: "nowrap" }}>Clivik</span>
              <span style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>·</span>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem" }}>Digital Solutions</span>
            </div>

            {/* Row 2: motto */}
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", fontWeight: 500, margin: 0 }}>
              &quot;From Clicks to Customers — On Autopilot.&quot;
            </p>

            {/* Row 3: copyright + privacy/terms */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", margin: 0 }}>
                &copy; 2026 Clivik. All rights reserved.
              </p>
              <div style={{ display: "flex", gap: 24 }}>
                <a href="/privacy-policy" style={{
                  color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", textDecoration: "none",
                  transition: "color 0.2s", minHeight: 44, display: "inline-flex", alignItems: "center",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  Privacy Policy
                </a>
                <a href="/terms-of-service" style={{
                  color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", textDecoration: "none",
                  transition: "color 0.2s", minHeight: 44, display: "inline-flex", alignItems: "center",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

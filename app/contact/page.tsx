"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { IconPhone, IconSend, IconWhatsApp, IconMail, IconMapPin, IconClock2 } from "../components/icons";

const BUSINESS_DOMAINS = [
  "Restaurant / Cafe",
  "Clinic / Hospital",
  "Gym / Fitness",
  "Shop / Retail",
  "Real Estate",
  "Education",
  "Other",
];

export default function ContactPage() {
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
    transition: "border-color 0.2s, background 0.2s", boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.875rem", fontWeight: 500,
    color: "rgba(255,255,255,0.9)", marginBottom: 8,
  };

  const contactItems = [
    {
      icon: <IconWhatsApp size={20} color="#25D366" />,
      label: "WhatsApp", value: "+91 62650 22474",
      href: "https://wa.me/916265022474?text=Hi%20Clivik!%20I%27d%20like%20to%20get%20a%20free%20mockup%20for%20my%20business.",
      color: "#25D366",
    },
    {
      icon: <IconMail size={20} color="#c4b5fd" />,
      label: "Email", value: "helloclivik@gmail.com",
      href: "mailto:helloclivik@gmail.com",
      color: "#c4b5fd",
    },
    {
      icon: <IconMapPin size={20} color="#fbbf24" />,
      label: "Location", value: "Bhopal, Madhya Pradesh",
      href: "https://maps.google.com/?q=Bhopal,Madhya+Pradesh",
      color: "#fbbf24",
    },
    {
      icon: <IconClock2 size={20} color="#c4b5fd" />,
      label: "Response Time", value: "Same Day — Always",
      href: "#",
      color: "#c4b5fd",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: "var(--subpage-hero-pt, 208px)", paddingBottom: 80,
        paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)",
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
            Get In Touch
          </div>
          <h1 style={{ fontSize: "clamp(3.1em, 7.1vw, 5.1em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
            Ready to See Your<br />Business Online?
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 480, margin: "0 auto" }}>
            Fill the form below or WhatsApp us directly. We respond same day — always.
          </p>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 90, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Contact Section */}
      <section style={{ background: "#f2f2f7", padding: "40px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>

          {/* Left: Info */}
          <div>
            <h2 style={{ fontSize: "clamp(2em, 3.3vw, 2.6em)", fontWeight: 700, color: "#0d0e1a", marginBottom: "var(--contact-h2-mb, 20px)" }}>
              Let&apos;s Build Something Great
            </h2>
            <p style={{ color: "#374151", lineHeight: 1.75, fontSize: "1rem", marginBottom: 36 }}>
              Tell us about your business and we will send you a free custom website mockup within 24 hours. See it first, pay only if you love it. Zero risk.
            </p>

            {/* Contact methods */}
            <div style={{ 
              display: "flex", flexDirection: "column", marginBottom: 40,
              background: "#0d0e1a", borderRadius: 24, padding: "16px 24px",
              border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
            }}>
              {contactItems.map((item, index) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ 
                    display: "flex", alignItems: "center", gap: 16, padding: "16px 0", minHeight: 48,
                    textDecoration: "none", transition: "transform 0.2s",
                    borderBottom: index < contactItems.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" 
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(6px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.color}20`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item.label}</div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "1rem" }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%27d%20like%20to%20get%20a%20free%20mockup%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                width: "100%", padding: "14px 20px", minHeight: 48, borderRadius: 14, background: "#25D366", color: "#fff",
                textDecoration: "none", fontSize: "1rem", fontWeight: 700,
                transition: "transform 0.2s, opacity 0.2s", boxSizing: "border-box",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <IconWhatsApp size={20} color="#fff" />
              <span>Message Us on WhatsApp</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </a>
          </div>

          {/* Right: Form */}
          <div style={{
            background: "#0d0e1a", borderRadius: 24, padding: "40px 32px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#6c3bff", display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <IconSend size={28} color="#fff" />
                </div>
                <h3 style={{ fontSize: "1.6em", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "1rem" }}>
                  We&apos;ll reach out to you within 24 hours on your WhatsApp number.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: 28, padding: "12px 28px", minHeight: 48, borderRadius: 12, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", color: "#fff", cursor: "pointer", fontSize: "0.9375rem", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#fff", marginBottom: 4 }}>Get Your Free Mockup</h3>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.85)" }}>Takes 2 minutes. We respond to every enquiry same day.</p>
                </div>

                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input type="text" required placeholder="Rahul Sharma"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Your Business Type</label>
                  <select
                    value={form.domain} onChange={e => setForm({ ...form, domain: e.target.value })}
                    required
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  >
                    <option value="" style={{ background: "#0d0e1a" }}>Select business type</option>
                    {BUSINESS_DOMAINS.map(d => <option key={d} value={d} style={{ background: "#0d0e1a" }}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>WhatsApp Number</label>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", display: "inline-flex", alignItems: "center" }}>
                      <IconPhone size={16} color="rgba(255,255,255,0.7)" />
                    </span>
                    <input type="tel" required placeholder="+91 98765 43210"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ ...inputStyle, paddingLeft: 42 }}
                      onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tell Us More</label>
                  <textarea required placeholder="What does your business do? What do you need?"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 110, lineHeight: 1.6 } as React.CSSProperties}
                    onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} style={{
                  padding: "14px 20px", minHeight: 48, borderRadius: 12, background: isSubmitting ? "#8b5cf6" : "#6c3bff", color: "#fff",
                  border: "none", fontSize: "1rem", fontWeight: 700, cursor: isSubmitting ? "not-allowed" : "pointer",
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  transition: "all 0.2s", boxShadow: "0 4px 20px rgba(108,59,255,0.35)",
                  opacity: isSubmitting ? 0.8 : 1, boxSizing: "border-box",
                }}
                  onMouseEnter={e => { if(!isSubmitting){ (e.currentTarget as HTMLElement).style.background = "#5a2fe0"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; } }}
                  onMouseLeave={e => { if(!isSubmitting){ (e.currentTarget as HTMLElement).style.background = "#6c3bff"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; } }}
                >
                  <span>{isSubmitting ? "Sending..." : "Get My Free Mockup"}</span>
                  {!isSubmitting && <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

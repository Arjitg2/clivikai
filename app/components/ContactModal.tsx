"use client";
import { useState, useEffect } from "react";
import { IconPhone, IconSend } from "./icons";

const BUSINESS_TYPES = [
  "Restaurant & Food",
  "Clinic & Healthcare",
  "Gym & Fitness",
  "Retail & E-commerce",
  "Real Estate",
  "Education & Coaching",
  "Other",
];

const WHATSAPP_NUMBER = "916265022474";

function buildWAMessage(form: { name: string; business: string; phone: string; message: string }) {
  return encodeURIComponent(
    `Hi Clivik! My name is ${form.name}.\nBusiness type: ${form.business}.\nWhatsApp: ${form.phone}.\n\n${form.message}`
  );
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Listen for custom event from any CTA button */
  useEffect(() => {
    const handler = () => { setOpen(true); setSubmitted(false); };
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  /* Close on Escape key */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  /* Prevent body scroll when open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptUrl && scriptUrl !== "") {
        await fetch(scriptUrl, {
          method: "POST",
          body: JSON.stringify({ ...form, domain: form.business }),
          mode: "no-cors",
        });
      }
      const msg = buildWAMessage(form);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", minHeight: 48, borderRadius: 10,
    background: "#f5f4ff", border: "1.5px solid #e0d9ff",
    color: "#0d0e1a", fontSize: "1rem", fontFamily: "inherit", outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.875rem", fontWeight: 600,
    color: "#1f2937", marginBottom: 8,
  };

  return (
    /* Backdrop */
    <div
      onClick={() => setOpen(false)}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(13,14,26,0.72)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 16px",
        overflowY: "auto",
      }}
    >
      {/* Modal box */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          width: "100%",
          maxWidth: 520,
          maxHeight: "calc(100dvh - 40px)",
          overflowY: "auto",
          padding: "clamp(24px, 5vw, 44px)",
          position: "relative",
          boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
          boxSizing: "border-box",
        }}
      >
        {/* Close button (min 44x44px touch target) */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute", top: 16, right: 16,
            width: 44, height: 44, borderRadius: "50%",
            background: "#f0eeff", border: "none", cursor: "pointer",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.35rem", color: "#6c3bff", fontWeight: 700,
            lineHeight: 1,
          }}
          aria-label="Close modal"
        >
          <span style={{ transform: "translateY(-1px)" }}>×</span>
        </button>

        {submitted ? (
          /* Success state */
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "linear-gradient(135deg,#8b5cf6,#6c3bff)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <IconSend size={28} color="#fff" />
            </div>
            <h3 style={{ fontSize: "1.5em", fontWeight: 800, color: "#0d0e1a", marginBottom: 12 }}>
              Opening WhatsApp…
            </h3>
            <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.6 }}>
              Your message is ready. Send it on WhatsApp and we will respond same day!
            </p>
            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24, padding: "12px 32px", minHeight: 48, borderRadius: 12,
                background: "#6c3bff", color: "#fff", border: "none",
                fontSize: "1rem", fontWeight: 600, cursor: "pointer",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}
            >
              Done
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Heading */}
            <div style={{ marginBottom: 4 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 12px", borderRadius: 999,
                background: "#f0eeff", marginBottom: 12,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6c3bff" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#6c3bff" }}>
                  Free • No payment needed
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(1.3em, 4vw, 1.65em)", fontWeight: 800,
                color: "#0d0e1a", lineHeight: 1.25, marginBottom: 8,
              }}>
                Let&apos;s Build Something Great
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.5 }}>
                Takes 2 minutes to fill. We respond to every enquiry same day.
              </p>
            </div>

            {/* Name */}
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text" required placeholder="Rahul Sharma"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "#f0eeff"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#e0d9ff"; e.currentTarget.style.background = "#f5f4ff"; }}
              />
            </div>

            {/* Business type */}
            <div>
              <label style={labelStyle}>Your Business Type</label>
              <select
                required
                value={form.business} onChange={e => setForm({ ...form, business: e.target.value })}
                style={{ ...inputStyle, cursor: "pointer", appearance: "auto" }}
                onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#e0d9ff"; }}
              >
                <option value="" disabled>Select your business type…</option>
                {BUSINESS_TYPES.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* WhatsApp number */}
            <div>
              <label style={labelStyle}>WhatsApp Number</label>
              <div style={{ position: "relative" }}>
                <span style={{
                  position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
                  display: "inline-flex", alignItems: "center",
                }}>
                  <IconPhone size={16} color="#6c3bff" />
                </span>
                <input
                  type="tel" required placeholder="+91 98765 43210"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{ ...inputStyle, paddingLeft: 42 }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "#f0eeff"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e0d9ff"; e.currentTarget.style.background = "#f5f4ff"; }}
                />
              </div>
            </div>

            {/* Tell us more */}
            <div>
              <label style={labelStyle}>Tell Us More</label>
              <textarea
                required placeholder="What does your business do and what do you need from us?"
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                rows={3}
                style={{ ...inputStyle, resize: "vertical", minHeight: 90, lineHeight: 1.6 } as React.CSSProperties}
                onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "#f0eeff"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "#e0d9ff"; e.currentTarget.style.background = "#f5f4ff"; }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "14px 20px", minHeight: 48, borderRadius: 12,
                background: isSubmitting ? "#8b5cf6" : "linear-gradient(135deg,#8b5cf6,#6c3bff)",
                color: "#fff", border: "none", fontSize: "1rem",
                fontWeight: 700, cursor: isSubmitting ? "not-allowed" : "pointer",
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                transition: "all 0.2s",
                boxShadow: "0 4px 20px rgba(108,59,255,0.35)",
                opacity: isSubmitting ? 0.8 : 1,
              }}
              onMouseEnter={e => { if(!isSubmitting){ e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(108,59,255,0.45)"; } }}
              onMouseLeave={e => { if(!isSubmitting){ e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(108,59,255,0.35)"; } }}
            >
              <span>{isSubmitting ? "Sending..." : "Submit"}</span>
              {!isSubmitting && <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>}
            </button>

            <p style={{ fontSize: "0.8125rem", color: "#4b5563", textAlign: "center", marginTop: -4 }}>
              No spam. No payment needed. We&apos;ll contact you via WhatsApp.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

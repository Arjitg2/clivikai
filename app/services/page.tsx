"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { IconGlobe, IconMapPin, IconSmartphone, IconBot, IconZap, IconShield, IconCheck, IconWhatsApp } from "../components/icons";

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

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient exactly */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: "var(--subpage-hero-pt, 208px)",
        paddingBottom: 16,
        paddingLeft: "clamp(20px, 6vw, 120px)",
        paddingRight: "clamp(20px, 6vw, 120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        {/* Circles */}
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(139,92,246,0.4)", color: "#fff", fontSize: "0.875rem", fontWeight: 500, marginBottom: 24 }}>
            What We Do
          </div>
          <h1 style={{ fontSize: "clamp(3.1em, 7.1vw, 5.1em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
            Five Services.<br />One Goal — More Customers, Less Manual Work.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 500, margin: "0 auto 32px" }}>
            Everything a local business needs to get found online — delivered in 5 days, at a price that makes sense.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "14px 32px", minHeight: 48, borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1rem", fontWeight: 700,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            <span>Get Free Consultation</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>

          <div style={{ 
            marginTop: 96, 
            display: "inline-flex", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 16,
            background: "#0d0e1a", 
            padding: "16px 28px", 
            borderRadius: 16, 
            border: "1px solid rgba(255,255,255,0.15)", 
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            backdropFilter: "none",
            fontSize: "0.9375rem",
            color: "#fff"
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#c4b5fd", fontWeight: 700 }}>150+</span> Websites Built</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#c4b5fd", fontWeight: 700 }}>5 Day</span> Delivery</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>Free Mockup First</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>Same-Day WhatsApp Reply</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Services Grid */}
      <section style={{ background: "#f2f2f7", padding: "72px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32 }}>
          {services.map((s) => (
            <div key={s.title} style={{
              flex: "1 1 300px",
              maxWidth: 400,
              background: "#161726", borderRadius: 24, padding: "32px 24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex", flexDirection: "column",
              height: "100%",
              transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)"; (e.currentTarget as HTMLElement).style.borderColor = s.accent; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.accent}15`, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {/* Clone icon with smaller size since container is smaller */}
                {s.icon.type({ ...s.icon.props, size: 22 })}
              </div>
              <h2 style={{ fontSize: "1.35em", fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.95em", lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
              
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: 24, width: "100%" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9em", color: "rgba(255,255,255,0.92)" }}>
                    <IconCheck size={16} color={s.accent} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f2f2f7", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)", textAlign: "center" }}>
        <div style={{ background: "#0d0e1a", borderRadius: 32, padding: "64px 32px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2em, 3.8vw, 3.1em)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Not sure which service you need?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1em", marginBottom: 32 }}>WhatsApp us — we'll guide you to the right solution. Free advice, zero pressure.</p>
          <a
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20know%20more%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 32px", minHeight: 48, borderRadius: 12, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: 700, transition: "transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            <IconWhatsApp size={20} color="#fff" />
            <span>Chat on WhatsApp</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

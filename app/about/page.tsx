"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { IconTarget, IconZap, IconMessageCircle, IconHandshake, IconTag, IconEye } from "../components/icons";

const values = [
  { icon: <IconTag size={28} color="#a78bfa" />, title: "Honest Pricing", desc: "What we quote is what you pay. No hidden fees, no surprise charges — ever.", accent: "#a78bfa" },
  { icon: <IconZap size={28} color="#a78bfa" />, title: "Fast Delivery", desc: "Your website goes live in 5 days. While other agencies take 45 days.", accent: "#a78bfa" },
  { icon: <IconMessageCircle size={28} color="#a78bfa" />, title: "Same-Day Reply", desc: "WhatsApp karo — we reply the same day. No ghosting, no excuses.", accent: "#a78bfa" },
  { icon: <IconEye size={28} color="#a78bfa" />, title: "You See First, Pay Later", desc: "We build your mockup for free. You only pay once you love it.", accent: "#a78bfa" },
];


export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: "var(--subpage-hero-pt, 208px)", paddingBottom: "var(--about-hero-pb, 64px)",
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
            About Clivik
          </div>
          <h1 style={{ fontSize: "clamp(3.1em, 7.1vw, 5.1em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
            Built by Someone Who<br />Understands Your Business
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 520, margin: "0 auto" }}>
            Clivik exists because local businesses deserve to be found online — not just the big brands with big budgets.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            marginTop: 32, padding: "14px 32px", minHeight: 48, borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1rem", fontWeight: 700, position: "relative", zIndex: 10,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            <span>Meet the Founder</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 90, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Founder Section */}
      <section style={{ background: "#f2f2f7", padding: "var(--about-founder-pt, 64px) clamp(20px,6vw,120px) 120px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "var(--about-founder-gap, 32px)", alignItems: "center" }}>
          {/* Photo */}
          <div style={{ background: "#fff", borderRadius: 24, padding: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.08)", position: "relative" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", background: "#e0e0e0", minHeight: 320 }}>
              <Image
                src="https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790584426/ChatGPT_Image_Sep_28_2026_02_02_51_PM_n7nhui.png"
                alt="Arjit Gupta — Founder of Clivik"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div style={{ position: "absolute", bottom: -12, right: 24, background: "#fff", padding: "16px 24px", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.04)" }}>
              <div style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "16px", lineHeight: 1.25 }}>Arjit Gupta</div>
              <div style={{ color: "#6c3bff", fontWeight: 600, fontSize: "14px", lineHeight: 1.25, marginTop: 4 }}>Founder, Clivik</div>
            </div>
          </div>

          {/* Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--about-founder-story-gap, 24px)", fontSize: "16px", color: "#374151", lineHeight: 1.75 }}>
            <p style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "24px", lineHeight: 1.3 }}>Hi, I&apos;m Arjit Gupta.</p>
            <p>I started Clivik because I saw local Indian businesses losing money to big agencies that overcharge and under-deliver.</p>
            <p>We don&apos;t do fancy pitches. We just build digital systems (websites, WhatsApp automation) that actually get you more customers — at a price that makes sense for local businesses.</p>
            <p>Let&apos;s work together.</p>
            <div style={{ background: "#fff", padding: "24px", borderRadius: 16, borderLeft: "4px solid #6c3bff", fontWeight: 600, color: "#0d0e1a", lineHeight: 1.5, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              Based in Bhopal. Built for Indian SMBs.
            </div>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "16px 32px", minHeight: "48px", borderRadius: 12,
                background: "#6c3bff", color: "#fff",
                border: "none", cursor: "pointer",
                fontSize: "16px", fontWeight: 700, width: "fit-content",
                fontFamily: "inherit",
                transition: "transform 0.2s, background 0.2s",
                boxShadow: "0 4px 16px rgba(108,59,255,0.25)"
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#5a2fe0"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#6c3bff"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            >
              <span>Meet The Founder</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#f2f2f7", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2em, 3.8vw, 3.1em)", fontWeight: 700, color: "#0d0e1a", marginBottom: 40, textAlign: "center" }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {values.map(v => (
              <div key={v.title} style={{
                background: "#161726", borderRadius: 20, padding: "32px 24px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex", flexDirection: "column",
                transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)"; (e.currentTarget as HTMLElement).style.borderColor = v.accent; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${v.accent}15`, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {v.icon.type({ ...v.icon.props, size: 22 })}
                </div>
                <h3 style={{ fontWeight: 800, color: "#fff", fontSize: "1.35em", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.6, fontSize: "0.95em" }}>{v.desc}</p>
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

"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

const works = [
  {
    title: "Dentify Bhopal",
    category: "Dental Clinic",
    desc: "A clean, professional dental clinic website with appointment booking, Google Maps integration and a trust-building design.",
    link: "https://dentifybhopal.framer.website/",
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1780293818/Home-Dentify-free-template_1_rgr7k7.png",
    tags: ["Website", "Google Profile", "WhatsApp Button"],
    accent: "#6c3bff",
  },
  {
    title: "Sofra Restaurant",
    category: "Restaurant & Dining",
    desc: "A premium restaurant website with a full menu, online table reservation flow, and an immersive visual design.",
    link: "https://sofrabhopal.framer.website/",
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1780293817/Sofra-Restaurant-Template_1_tlo7cs.png",
    tags: ["Website", "Social Media", "Google Profile"],
    accent: "#6c3bff",
  },
  {
    title: "S-Three Fitness",
    category: "Gym & Fitness",
    desc: "High-energy gym website showcasing classes, trainers, membership plans and a strong call-to-action for sign-ups.",
    link: "https://s-three-fitness.netlify.app/",
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1780293818/My-Google-AI-Studio-App_1_atjomq.png",
    tags: ["Website", "WhatsApp Automation", "SEO"],
    accent: "#6c3bff",
  },
  {
    title: "Shree Mangalam Properties",
    category: "Real Estate",
    desc: "A premium real estate website for a Bhopal-based property firm — featuring verified listings, locality exploration, and a seamless contact flow.",
    link: "https://shri-mangalam.netlify.app/",
    imageSrc: "/Shree-Mangalam-Properties (1).png",
    tags: ["Website", "Property Listings", "SEO"],
    accent: "#6c3bff",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Restaurant", "Clinic", "Gym", "Retail", "Real Estate"];
  const filteredWorks = filter === "All" ? works : works.filter(w => w.category.includes(filter));

  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
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
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(139,92,246,0.4)", color: "#fff", fontSize: "0.875rem", fontWeight: 500, marginBottom: 24 }}>
            Our Work
          </div>
          <h1 style={{ fontSize: "clamp(3.1em, 7.1vw, 5.1em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
            Real Websites.<br />Real Businesses.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 500, margin: "0 auto 32px" }}>
            Each project is built with care — custom-designed, fast-loading, and ready to bring in customers from day one.
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
            <span>Get Your Website</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>

          <div style={{ marginTop: 96, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, position: "relative", zIndex: 10 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: "12px 24px", minHeight: 48, borderRadius: 12, fontSize: "0.9375rem", fontWeight: 700, cursor: "pointer",
                border: filter === cat ? "1px solid #6c3bff" : "1px solid rgba(108,59,255,0.2)",
                background: filter === cat ? "#6c3bff" : "#fff",
                color: filter === cat ? "#fff" : "#6c3bff",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                transition: "all 0.2s",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                transform: "translateY(0)"
              }}
                onMouseEnter={e => { if (filter !== cat) e.currentTarget.style.background = "#f4f0ff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { if (filter !== cat) e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Portfolio Grid */}
      <section style={{ background: "#f2f2f7", padding: "56px clamp(20px,6vw,120px) 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
          {filteredWorks.map((work, i) => (
            <div key={work.title} style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "center",
            } as React.CSSProperties}>

              {/* Image */}
              <div style={{
                order: i % 2 === 1 ? 2 : 1,
                background: "#0d0e1a", borderRadius: 24, overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                aspectRatio: "16/10",
                position: "relative",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.imageSrc}
                  alt={work.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              {/* Text */}
              <div style={{ order: i % 2 === 1 ? 1 : 2, padding: "0 8px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "6px 14px", borderRadius: 999, background: `${work.accent}18`, color: work.accent, fontSize: "0.875rem", fontWeight: 600, marginBottom: 16 }}>{work.category}</div>
                <h2 style={{ fontSize: "clamp(2em, 3.3vw, 2.6em)", fontWeight: 800, color: "#0d0e1a", marginBottom: 16, letterSpacing: "-0.03em" }}>{work.title}</h2>
                <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.7, marginBottom: 28 }}>{work.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
                  {work.tags.map(tag => (
                    <span key={tag} style={{ padding: "8px 16px", borderRadius: 999, background: "#fff", border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.875rem", color: "#1f2937", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
                <a
                  href={work.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "14px 32px", minHeight: 48, borderRadius: 12,
                    background: "#0d0e1a", color: "#fff", textDecoration: "none",
                    fontSize: "1rem", fontWeight: 600,
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6c3bff"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#0d0e1a"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <span>View Live Website</span>
                  <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f2f2f7", padding: "64px clamp(20px,6vw,120px) 64px", textAlign: "center" }}>
        <div style={{ background: "linear-gradient(135deg, #0d0e1a, #131525)", borderRadius: 32, padding: "64px 32px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "var(--title-size)", fontWeight: 600, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.04em", fontFamily: "'FullerSansDT', 'Inter', sans-serif", marginBottom: 16 }}>Want a website like these?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1em", marginBottom: 32 }}>We'll build you a free mockup first. See it before you pay for it.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ 
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 32px", minHeight: 48, borderRadius: 12, background: "#fff", color: "#0d0e1a", textDecoration: "none", fontSize: "1rem", fontWeight: 700, transition: "transform 0.2s" 
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <span>Get Free Mockup</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </Link>
            <Link href="/pricing" style={{ 
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "14px 32px", minHeight: 48, borderRadius: 12, background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", transition: "transform 0.2s, background 0.2s" 
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
            >
              <span>View Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#f2f2f7", padding: "0 clamp(20px,6vw,120px) 40px", textAlign: "center" }}>
        <p style={{ color: "#4b5563", fontSize: "0.9375rem", maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
          Disclaimer: Since Clivik is newly launching, the portfolio section currently features our agency's past work and internal showcase projects to demonstrate our design and automation capabilities.
        </p>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

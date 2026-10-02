import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import Team from "./Team";

export default function About() {
  return (
    <section id="about" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px)" }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "var(--sec-mb)" as any, textAlign: "var(--sec-text-align)" as any }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "#fff", fontSize: "14px", fontWeight: 600, color: "#0d0e1a",
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>About Clivik</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 700, color: "#0d0e1a",
            lineHeight: 1.15, letterSpacing: "-0.04em",
            maxWidth: "100%", fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>Built by Someone Who <br className="desktop-br" />Understands Your Business.</h2>
        </div>

        {/* Content Grid */}
        <div style={{ display: "flex", flexDirection: "var(--about-flex, row)" as any, gap: 40, alignItems: "center" }}>
          {/* Left/Top Image Content */}
          <div style={{ 
            background: "#ffffff", borderRadius: 24, padding: 16, flex: "1 1 50%",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)", position: "relative"
          }}>
            <div style={{ 
              position: "relative", width: "100%", aspectRatio: "3/4", 
              borderRadius: 16, overflow: "hidden", background: "#e0e0e0", minHeight: "352px" 
            }}>
              <Image 
                src="https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790584426/ChatGPT_Image_Sep_28_2026_02_02_51_PM_n7nhui.png" 
                alt="Arjit Gupta - Founder of Clivik"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div style={{ 
              position: "absolute", bottom: -16, right: 24, 
              background: "#ffffff", padding: "16px 24px", borderRadius: 16, zIndex: 10,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column",
              border: "1px solid rgba(0,0,0,0.04)",
            }}>
              <span style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "16px", lineHeight: 1.25 }}>Arjit Gupta</span>
              <span style={{ color: "#6c3bff", fontWeight: 600, fontSize: "14px", lineHeight: 1.25, marginTop: 4 }}>Founder, Clivik</span>
            </div>
          </div>

          {/* Right/Bottom Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--about-para-gap, 24px)", fontSize: "16px", color: "#374151", lineHeight: 1.75, flex: "1 1 50%", maxWidth: "var(--about-text-max-width, 100%)" }}>
            <p style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "20px", lineHeight: 1.4 }}>
              Hi, I am Arjit Gupta — founder of Clivik.
            </p>
            <p>
              I started Clivik because I kept seeing local businesses lose customers to competitors who were simply more visible online.
            </p>
            <p>
              Their competitors were not better. They were just easier to find on Google.
            </p>
            <p>
              That is the problem Clivik exists to solve.
            </p>
            <p>
              I personally handle every project — because the person who understands your problem should be the same person solving it.
            </p>
            <div style={{
              background: "#ffffff", padding: "24px", borderRadius: 16, 
              borderLeft: "4px solid #6c3bff", marginTop: 8,
              fontWeight: 600, color: "#0d0e1a", lineHeight: 1.5,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
            }}>
              Based in Bhopal.<br/>Built for M.P. businesses.
            </div>
          </div>

        </div>

        {/* Team Section */}
        <Team />
      </div>
      </ScrollReveal>
    </section>
  );
}

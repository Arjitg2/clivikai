"use client";

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `Welcome to Clivik ("we," "our," or "us"). By accessing our website (clivik.netlify.app) or engaging our digital presence services, you ("Client," "you") agree to be bound by these Terms and Conditions. Please read them carefully before using our services.

If you do not agree to all the terms and conditions, you may not access our website or use any of our services.`,
    },
    {
      id: "services-provided",
      title: "2. Services Provided",
      content: `Clivik provides digital presence solutions primarily tailored for local businesses. Our services may include:

- Custom Website Design and Development
- Google Business Profile Setup and Optimization
- Social Media Setup (Facebook, Instagram, WhatsApp Business)
- Basic SEO implementation
- Ongoing digital presence consulting

The specific scope of work, deliverables, and timeline will be outlined in a separate proposal or communication sent to you prior to the commencement of the project.`,
    },
    {
      id: "client-responsibilities",
      title: "3. Client Responsibilities",
      content: `To ensure successful and timely delivery of our services, you agree to:

- Provide all necessary text, images, logos, and business information required for the project in a timely manner.
- Ensure you have the legal right and copyright to use any content you provide to us.
- Review mockups, drafts, and ongoing work promptly and provide clear, constructive feedback.
- Grant necessary access to existing domain registrars, hosting accounts, or social media profiles if required to complete the work.

Delays in providing content or feedback may result in corresponding delays to the project timeline.`,
    },
    {
      id: "payments-and-refunds",
      title: "4. Payments & Refunds",
      content: `**Payment Terms:**
- A standard upfront deposit (typically 50%) is required before any development work begins, unless stated otherwise in your custom proposal.
- The remaining balance is due upon project completion and before the final website or digital assets are handed over or published to your live domain.

**Refund Policy:**
- We offer a "See it first, pay only if you love it" approach for our initial custom mockups.
- However, once a deposit is paid and the actual development or service implementation has commenced, the deposit is generally **non-refundable**, as it covers the time and labor invested by our team.
- Refunds for subsequent payments are handled on a case-by-case basis at the sole discretion of Clivik.`,
    },
    {
      id: "revisions",
      title: "5. Revisions and Scope Changes",
      content: `We aim for your complete satisfaction. Our standard packages include a specified number of revision rounds.

- A "revision" constitutes minor adjustments to text, colors, layout, or images within the agreed-upon design.
- Major changes that deviate significantly from the original approved mockup or scope (e.g., requesting a completely new design, adding complex e-commerce features not originally discussed) will be subject to additional fees.
- Once the final project is approved by the client, any subsequent changes will be billed at our standard hourly or fixed-task rate.`,
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      content: `**Your Content:** You retain full ownership and copyright of any text, images, and brand assets you provide to us.

**Final Deliverables:** Upon full payment of all project fees, ownership of the final front-end website and design assets transfers to you.

**Our Intellectual Property:** We retain the rights to the underlying code libraries, reusable components, templates, and frameworks developed prior to or independently of your project. You are granted a non-exclusive license to use these elements as part of the final delivered website.`,
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation of Liability",
      content: `To the fullest extent permitted by applicable law, Clivik and its team members shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

- Your access to or use of (or inability to access or use) our services or deliverables.
- Any unauthorized access to or use of our secure servers and/or any personal information stored therein.
- Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services by any third party.
- Any errors or omissions in any content or loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the services.`,
    },
    {
      id: "termination",
      title: "8. Termination",
      content: `We reserve the right to suspend or terminate our services and this agreement at any time, with or without cause. 

If you terminate the project before completion, you will forfeit any deposits paid and will be billed for any work completed beyond the covered deposit amount.

If we terminate the project without cause, we will refund any payments made for work not yet completed.`,
    },
    {
      id: "governing-law",
      title: "9. Governing Law",
      content: `These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising out of or relating to these terms or our services shall be subject to the exclusive jurisdiction of the courts located in **Bhopal, Madhya Pradesh**.`,
    },
    {
      id: "contact",
      title: "10. Contact Information",
      content: `If you have any questions about these Terms, please contact us:

**Clivik — Digital Presence Agency**
Email: helloclivik@gmail.com
WhatsApp: +91 6265022474
Location: Bhopal, Madhya Pradesh, India`,
    },
  ];

  return (
    <main style={{ background: "var(--bg-dark)", minHeight: "100vh", paddingTop: 100 }}>
      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: "var(--subpage-hero-pt, 205px)",
        paddingBottom: 64,
        paddingLeft: "var(--sec-px)",
        paddingRight: "var(--sec-px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(139,92,246,0.4)", color: "#fff", fontSize: "0.9em", fontWeight: 500, marginBottom: 20
          }}>
            Legal Document
          </div>
          <h1 style={{
            fontSize: "clamp(2.4em, 5.5vw, 3.7em)", fontWeight: 800,
            color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20,
          }}>
            Terms and Conditions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05em", lineHeight: 1.7, maxWidth: 600 }}>
            These terms govern your use of Clivik's services and website. Please read them carefully before engaging with us.
          </p>
          <div style={{
            display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap", justifyContent: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#6c3bff", fontSize: "1.1em" }} aria-hidden="true">📅</span>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9em" }}>
                <strong style={{ color: "#fff" }}>Last Updated:</strong> May 9, 2026
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#6c3bff", fontSize: "1.1em" }} aria-hidden="true">🏢</span>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9em" }}>
                <strong style={{ color: "#fff" }}>Operator:</strong> Clivik, Bhopal, M.P., India
              </span>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to bottom, transparent 0%, var(--bg-dark) 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Table of Contents + Content */}
      <section style={{ padding: "64px var(--sec-px) 96px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          {/* TOC */}
          <div style={{
            background: "var(--bg-dark-card)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20, padding: "32px", marginBottom: 56,
          }}>
            <h2 style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95em", fontWeight: 700, marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Table of Contents
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "8px 32px" }}>
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} style={{
                  color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95em",
                  minHeight: 44, display: "inline-flex", alignItems: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#a78bfa")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Policy Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {sections.map((section) => (
              <div key={section.id} id={section.id} style={{
                background: "var(--bg-dark-card)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, padding: "clamp(24px, 5vw, 40px)",
                scrollMarginTop: 104,
              }}>
                <h2 style={{
                  color: "#fff", fontSize: "1.25em", fontWeight: 700,
                  marginBottom: 20, paddingBottom: 16,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  {section.title}
                </h2>
                <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.97em", lineHeight: 1.8 }}>
                  {section.content.split("\n").map((line, i) => {
                    if (line.trim() === "") return <br key={i} />;

                    // Bold markdown: **text**
                    const parts = line.split(/\*\*(.*?)\*\*/g);
                    const rendered = parts.map((part, j) =>
                      j % 2 === 1
                        ? <strong key={j} style={{ color: "#fff", fontWeight: 600 }}>{part}</strong>
                        : part
                    );

                    // Bullet point
                    if (line.trim().startsWith("- ")) {
                      return (
                        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 8, alignItems: "flex-start" }}>
                          <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: 2, fontSize: "0.9em" }} aria-hidden="true">▸</span>
                          <span>{rendered}</span>
                        </div>
                      );
                    }

                    return <p key={i} style={{ marginBottom: 12 }}>{rendered}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: 56, background: "linear-gradient(135deg, rgba(108,59,255,0.15), rgba(139,92,246,0.08))",
            border: "1px solid rgba(108,59,255,0.25)", borderRadius: 20, padding: "40px",
            textAlign: "center",
          }}>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1em", lineHeight: 1.7, marginBottom: 24 }}>
              Have questions about our terms? We&apos;re happy to clarify.
            </p>
            <a href="mailto:helloclivik@gmail.com" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              background: "#6c3bff", color: "#fff", textDecoration: "none",
              minHeight: 48, padding: "12px 28px", borderRadius: 12, fontWeight: 600, fontSize: "0.95em",
              transition: "all 0.2s", boxShadow: "0 4px 20px rgba(108,59,255,0.35)",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#5a2fe0";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#6c3bff";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              📧 helloclivik@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

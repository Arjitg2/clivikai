"use client";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: `Welcome to Clivik ("we," "our," or "us"). We are a digital presence agency based in Bhopal, Madhya Pradesh, India, helping local businesses get found online through professional websites, Google Business profiles, and social media.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website clivik.netlify.app, use our services, or interact with us via WhatsApp, Instagram, Facebook, or any other channel. Please read this policy carefully. By using our services, you agree to the terms of this Privacy Policy.`,
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: `We may collect the following types of information:

**a) Information You Provide Directly**
- Full name and business name
- WhatsApp / mobile phone number
- Email address
- Business type and description
- Messages, enquiries, and project details you share with us

**b) Information Collected Automatically**
- IP address and browser type
- Device and operating system information
- Pages visited and time spent on our website
- Referral URLs and click data
- Cookies and similar tracking technologies (see Section 7)

**c) Information from Third-Party Platforms**
- When you interact with our Facebook Page or Instagram profile, Meta may share engagement data with us (e.g., page likes, ad interactions, message threads)
- If you contact us via WhatsApp Business, we receive your WhatsApp phone number and the content of your messages`,
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      content: `We use the information we collect for the following purposes:

- **To provide and manage our services** — building and delivering your website, Google profile, and social media assets
- **To communicate with you** — responding to enquiries via WhatsApp, email, or phone
- **To send project updates** — sharing mockups, previews, and delivery confirmations
- **To process payments** — verifying orders and coordinating billing
- **To improve our services** — analysing usage data to enhance website performance and user experience
- **To run marketing campaigns** — displaying relevant ads on Facebook, Instagram, and Google to reach potential clients (using anonymised or aggregated data)
- **To comply with legal obligations** — maintaining records as required by applicable Indian law`,
    },
    {
      id: "meta-platforms",
      title: "4. Meta Platforms & Facebook Data",
      content: `We use Meta's platforms (Facebook and Instagram) for business promotion and customer communication. In connection with these platforms:

- We may use the **Meta Pixel** (also called the Facebook Pixel) on our website to track visitor actions and serve relevant advertisements. The Meta Pixel collects data such as pages viewed, buttons clicked, and form submissions.
- We may create **Custom Audiences** on Meta using contact information (e.g., phone numbers or emails) that you have provided to us, solely to show you relevant ads.
- We may use **Meta's Lead Ads** to collect enquiries directly through Facebook or Instagram. Any data submitted through Lead Ads is governed by both this Privacy Policy and Meta's Data Policy.
- We operate a **WhatsApp Business Account** to communicate with clients. Messages sent via WhatsApp are encrypted end-to-end by Meta.

We do **not** sell your personal data to Meta or any third party. Data shared with Meta is used only for advertising and communication purposes as described above.

For more information on how Meta handles data, please review Meta's Privacy Policy at: https://www.facebook.com/privacy/policy/`,
    },
    {
      id: "data-sharing",
      title: "5. How We Share Your Information",
      content: `We do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:

- **Service Providers** — With trusted third-party vendors who assist us in operating our website and delivering services (e.g., web hosting, email services, payment processors). These parties are contractually bound to keep your data confidential.
- **Meta / Facebook** — As described in Section 4, for advertising and communication via Meta's platforms.
- **Google** — We may use Google Analytics and Google Ads to analyse website traffic and run search ads. Google's data practices are governed by Google's Privacy Policy.
- **Legal Requirements** — If required by law, court order, or governmental authority in India or otherwise.
- **Business Transfers** — In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.`,
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      content: `We retain your personal information for as long as necessary to:

- Fulfil the purposes described in this Privacy Policy
- Comply with our legal obligations under Indian law (e.g., GST records, financial records)
- Resolve disputes and enforce our agreements

Typically, we retain client contact and project data for a period of **3 years** after the end of our business relationship. You may request deletion of your data at any time by contacting us (see Section 10).`,
    },
    {
      id: "cookies",
      title: "7. Cookies & Tracking Technologies",
      content: `Our website uses cookies and similar technologies to improve your experience. Cookies are small text files placed on your device.

**Types of cookies we use:**
- **Essential Cookies** — Required for the website to function correctly (e.g., session management)
- **Analytics Cookies** — Help us understand how visitors use our site (e.g., Google Analytics)
- **Marketing Cookies** — Used to deliver relevant advertisements (e.g., Meta Pixel, Google Ads tag)

**Your choices:**
- You can instruct your browser to refuse all cookies or to alert you when cookies are being sent.
- You can opt out of Meta's use of your data for ad targeting at: https://www.facebook.com/ads/preferences/
- You can opt out of Google Analytics tracking at: https://tools.google.com/dlpage/gaoptout

Please note that disabling certain cookies may affect your ability to use some features of our website.`,
    },
    {
      id: "your-rights",
      title: "8. Your Rights",
      content: `Depending on your location, you may have the following rights regarding your personal information:

- **Right to Access** — Request a copy of the personal data we hold about you
- **Right to Rectification** — Request correction of inaccurate or incomplete data
- **Right to Erasure** — Request deletion of your personal data (subject to legal obligations)
- **Right to Restriction** — Request that we restrict processing of your data in certain circumstances
- **Right to Object** — Object to our processing of your data for marketing purposes
- **Right to Data Portability** — Request your data in a structured, machine-readable format

To exercise any of these rights, please contact us at **helloclivik@gmail.com**. We will respond to all requests within **30 days**.`,
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that a child has provided us with personal information without parental consent, please contact us immediately at helloclivik@gmail.com and we will take steps to delete such information.`,
    },
    {
      id: "contact",
      title: "10. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Clivik — Digital Presence Agency**
Email: helloclivik@gmail.com
WhatsApp: +91 6265022474
Location: Bhopal, Madhya Pradesh, India

We are committed to resolving any complaints about our collection or use of your personal information. If you are not satisfied with our response, you may contact the relevant data protection authority in your jurisdiction.`,
    },
    {
      id: "changes",
      title: "11. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we update this policy, we will revise the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.

Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.`,
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
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05em", lineHeight: 1.7, maxWidth: 600 }}>
            At Clivik, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
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
              Have questions about this policy? We&apos;re happy to help.
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

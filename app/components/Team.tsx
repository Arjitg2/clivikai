"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  objectPosition: string;
  badge?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sudeep Sarkar",
    role: "AI Automation Strategist",
    bio: "Designs intelligent automation workflows that qualify leads, follow up, and book appointments — 24/7 without human intervention.",
    photo: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790762880/WhatsApp_Image_2026-09-30_at_3.29.53_PM_em1teo.jpg",
    objectPosition: "center 20%",
    badge: "AI Strategy",
  },
  {
    name: "Prachi Tirole",
    role: "Automation & AI Engineer",
    bio: "Builds and deploys the AI-powered systems behind Clivik's automation, turning business logic into working bots and integrations.",
    photo: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790943331/Professional_South_Asian_Business_Headshot_azv5wf.png",
    objectPosition: "center 20%",
    badge: "Automation",
  },
  {
    name: "Pravesh Baghel",
    role: "Marketing & Lead Generation Specialist",
    bio: "Drives customer acquisition through data-driven campaigns, optimised funnels, and lead generation strategies that deliver measurable results.",
    photo: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790943374/Thoughtful_Corporate_Portrait_gqtofq.png",
    objectPosition: "center 20%",
    badge: "Growth",
  },
  {
    name: "Aryan Chandrawanshi",
    role: "Meta Integration Specialist",
    bio: "Connects Meta advertising ecosystems with WhatsApp and CRM workflows, ensuring every ad click becomes a tracked, actionable conversation.",
    photo: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790941507/Professional_Portrait_in_Navy_Suit_mpjp1w.png",
    objectPosition: "center 15%",
    badge: "Meta API",
  },
  {
    name: "Dr. Rekha Gupta",
    role: "Quality Assurance Engineer",
    bio: "Ensures every product and automation we deliver meets the highest standards of reliability, accuracy, and client satisfaction before it goes live.",
    photo: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790941540/Elegant_Indian_Woman_in_Red_Saree_unf3re.png",
    objectPosition: "center 15%",
    badge: "QA & Testing",
  },
];

export default function Team() {
  return (
    <div style={{ marginTop: 64, paddingTop: 56, borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>
      {/* Header */}
      <div style={{ textAlign: "left", marginBottom: 56 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 18px",
            borderRadius: 999,
            background: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            color: "#6c3bff",
            border: "1px solid rgba(108, 59, 255, 0.2)",
            marginBottom: 20,
            boxShadow: "0 2px 8px rgba(108, 59, 255, 0.08)",
          }}
        >
          Our Team
        </div>
        <h3
          style={{
            fontSize: "var(--title-size)",
            fontWeight: 600,
            color: "#0d0e1a",
            lineHeight: 1.15,
            letterSpacing: "-0.04em",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif",
            marginBottom: 16,
          }}
        >
          The Specialists Behind Your Growth
        </h3>
        <p
          style={{
            color: "#4b5563",
            fontSize: "1.1rem",
            maxWidth: 600,
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          A dedicated team of engineers and strategists building systems that turn conversations into paying customers.
        </p>
      </div>

      {/* Responsive Grid — 3 top row + 2 centred bottom row on desktop */}
      <div className="skyris-team-grid">
        {/* Top row — 3 cards */}
        <div className="skyris-team-row skyris-team-row-top">
          {teamMembers.slice(0, 3).map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
        {/* Bottom row — 2 cards centred */}
        <div className="skyris-team-row skyris-team-row-bottom">
          {teamMembers.slice(3).map((member, i) => (
            <TeamCard key={member.name} member={member} index={i + 3} />
          ))}
        </div>
      </div>

      {/* Responsive layout styles */}
      <style jsx>{`
        .skyris-team-grid {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .skyris-team-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 640px) {
          .skyris-team-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .skyris-team-row-bottom {
            max-width: calc(50% + 12px);
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (min-width: 1024px) {
          .skyris-team-row-top {
            grid-template-columns: repeat(3, 1fr);
          }
          .skyris-team-row-bottom {
            grid-template-columns: repeat(2, 1fr);
            max-width: calc(66.666% + 8px);
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        damping: 24,
        stiffness: 280,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 380, damping: 18 },
      }}
      style={{
        background: "#ffffff",
        borderRadius: 22,
        border: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 48px rgba(108, 59, 255, 0.15)";
        e.currentTarget.style.borderColor = "rgba(108, 59, 255, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.06)";
        e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
      }}
    >
      {/* Normalized Photo Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 290,
          overflow: "hidden",
          background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
        }}
      >
        <Image
          src={member.photo}
          alt={`${member.name} - ${member.role} at Clivik`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: member.objectPosition,
            transition: "transform 0.4s ease",
          }}
        />

        {/* Bottom Vignette Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(13, 14, 26, 0.5) 0%, rgba(13, 14, 26, 0.04) 40%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Floating Specialty Tag */}
        {member.badge && (
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              padding: "4px 12px",
              borderRadius: 999,
              background: "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(108, 59, 255, 0.2)",
              color: "#6c3bff",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            {member.badge}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: "20px 22px 26px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h4
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#0d0e1a",
            marginBottom: 4,
            letterSpacing: "-0.03em",
            fontFamily: "'FullerSansDT', 'Inter', -apple-system, sans-serif",
          }}
        >
          {member.name}
        </h4>

        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#6c3bff",
            lineHeight: 1.4,
            marginBottom: 10,
          }}
        >
          {member.role}
        </p>

        <p
          style={{
            fontSize: "0.88rem",
            color: "#6b7280",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

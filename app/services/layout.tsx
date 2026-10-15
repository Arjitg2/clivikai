import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & WhatsApp Marketing Services",
  description:
    "Explore Clivik's 5 core automation systems: 7-second WhatsApp speed-to-lead, 30-day follow-up autopilot, broadcast campaigns, and automated Google reviews.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "AI Automation & WhatsApp Marketing Services | Clivik",
    description:
      "7-second WhatsApp replies, 24/7 lead qualification, and hands-free review management for growing businesses.",
    url: "https://clivikai.dpdns.org/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

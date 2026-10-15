import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Clivik AI Automation",
  description:
    "See how Clivik builds high-converting lead generation systems, WhatsApp automation workflows, and digital platforms for modern businesses.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Work & Case Studies | Clivik AI Automation",
    description:
      "Explore live projects, automated lead-capture systems, and websites deployed in 5 days.",
    url: "https://clivikai.dpdns.org/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

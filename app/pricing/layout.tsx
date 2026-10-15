import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent AI & WhatsApp Automation Pricing",
  description:
    "Affordable AI automation plans starting at ₹3,999/mo. 7-second replies, 24/7 lead qualification, review automation, and custom enterprise AI agents.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Transparent AI & WhatsApp Automation Pricing | Clivik",
    description:
      "Affordable AI automation plans starting at ₹3,999/mo. Zero missed leads, guaranteed 5-day setup.",
    url: "https://clivikai.dpdns.org/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

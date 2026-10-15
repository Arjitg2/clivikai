import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Clivik | Free AI Automation Consultation",
  description:
    "Connect directly with Clivik on WhatsApp or schedule a consultation. Get your custom AI WhatsApp bot and lead-gen website live in 5 days.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Clivik | Free AI Automation Consultation",
    description:
      "Direct WhatsApp chat and consultation with the founder. No ticketing queues, no waiting.",
    url: "https://clivikai.dpdns.org/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

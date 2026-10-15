import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Clivik | Founder-Led AI Automation Agency",
  description:
    "Learn about Clivik's mission to empower businesses with 24/7 AI lead automation, rapid 5-day deployment, and transparent zero-compromise execution.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Clivik | Founder-Led AI Automation Agency",
    description:
      "Meet founder Arjit Gupta and learn how Clivik builds high-impact automation for businesses.",
    url: "https://clivikai.dpdns.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

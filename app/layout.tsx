import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clivikai.dpdns.org"),
  title: {
    default: "Clivik — AI Automation & WhatsApp Automation for Businesses",
    template: "%s | Clivik",
  },
  description:
    "Clivik helps businesses automate WhatsApp, reply to leads in 7 seconds, qualify prospects 24/7, and deploy lead-generating websites live in 5 days.",
  keywords: [
    "Clivik",
    "Clivik AI",
    "AI Automation",
    "WhatsApp Automation",
    "WhatsApp Business API",
    "WhatsApp Bot",
    "AI Speed to Lead",
    "Lead Qualification",
    "Google Review Automation",
    "Lead Generation Website",
    "Digital Growth",
    "Bhopal",
  ],
  authors: [{ name: "Arjit Gupta", url: "https://clivikai.dpdns.org" }],
  creator: "Clivik Digital Solutions",
  publisher: "Clivik Digital Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clivik — AI Automation & WhatsApp Automation for Businesses",
    description:
      "Stop losing leads. 7-second automated WhatsApp replies, 24/7 smart lead qualification, and lead-gen websites live in 5 days.",
    url: "https://clivikai.dpdns.org",
    siteName: "Clivik Digital Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clivik — AI Automation & WhatsApp Automation for Businesses",
    description:
      "Stop losing leads. 7-second automated WhatsApp replies, 24/7 smart lead qualification, and lead-gen websites live in 5 days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://clivikai.dpdns.org/#organization",
      "name": "Clivik Digital Solutions",
      "alternateName": "Clivik AI",
      "url": "https://clivikai.dpdns.org",
      "sameAs": [
        "https://www.instagram.com/clivikdigital/?hl=en",
        "https://www.facebook.com/profile.php?id=61589704865610",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6265022474",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://clivikai.dpdns.org/#website",
      "url": "https://clivikai.dpdns.org",
      "name": "Clivik",
      "description": "AI Automation & WhatsApp Automation Agency",
      "publisher": {
        "@id": "https://clivikai.dpdns.org/#organization",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://clivikai.dpdns.org/#localbusiness",
      "name": "Clivik Digital Solutions",
      "telephone": "+916265022474",
      "url": "https://clivikai.dpdns.org",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://clivikai.dpdns.org/#software",
      "name": "Clivik AI WhatsApp Automation System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud / WhatsApp Business API",
      "offers": {
        "@type": "Offer",
        "price": "3999",
        "priceCurrency": "INR",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "38",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import Preloader from "./components/Preloader";

export const metadata: Metadata = {
  title: "Clivik Digital Solutions — WhatsApp Automation & Digital Growth for Local Businesses",
  description: "Clivik helps local businesses automate WhatsApp, capture more leads, and grow online. Website development, AI agents, WhatsApp automation, and Google Business Profile — all from one place.",
};

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

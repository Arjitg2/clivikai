"use client";
import { IconWhatsApp } from "./icons";

const WHATSAPP_NUMBER = "916265022474";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Clivik! I'd like to get a free mockup for my business.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 28,
        right: 24,
        zIndex: 1000,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 28px rgba(37,211,102,0.45)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        textDecoration: "none",
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 10px 40px rgba(37,211,102,0.55)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.45)";
      }}
    >
      <IconWhatsApp size={28} color="#fff" />
    </a>
  );
}

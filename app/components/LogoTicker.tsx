"use client";
import { useEffect, useRef } from "react";

const logos = ["Gym", "Restaurant", "Cafe", "Real Estate Agency", "Doctor", "Clothing", "Furniture Store"];

export default function LogoTicker() {
  return (
    <div style={{
      background: "transparent",
      padding: "0 0 24px 0",
      marginTop: "-70px",
      position: "relative",
      zIndex: 10,
      overflow: "hidden",
    }}>
      <div style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}>
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              style={{
                padding: "0 48px",
                display: "flex",
                alignItems: "center",
                color: "rgba(13,14,26,0.65)", /* Darker text */
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

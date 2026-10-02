"use client";
import { ReactNode } from "react";

export default function ScrollReveal({ children, delay = 0, y = 80, className = "" }: { children: ReactNode, delay?: number, y?: number, className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

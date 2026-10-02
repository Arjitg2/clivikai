"use client";
import ContactModal from "./components/ContactModal";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ContactModal />
    </>
  );
}

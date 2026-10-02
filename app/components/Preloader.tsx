"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCloud } from "./icons";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for a fraction of a second (800ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0, height: "100dvh",
            zIndex: 9999,
            backgroundColor: "#0d0e1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #8b5cf6, #6c3bff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px rgba(108, 59, 255, 0.4)",
              marginBottom: 16,
            }}
          >
            <IconCloud size={32} color="#fff" />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              height: 2,
              background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
              borderRadius: 2,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

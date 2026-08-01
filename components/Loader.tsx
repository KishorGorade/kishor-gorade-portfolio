"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statusMessages = [
  "BOOTING SECURITY CONSOLE",
  "LOADING THREAT FEEDS",
  "INITIALIZING SIEM MODULE",
  "VERIFYING INTEGRITY",
  "READY",
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIdx((prev) => {
        if (prev < statusMessages.length - 1) return prev + 1;
        clearInterval(statusInterval);
        return prev;
      });
    }, 420);

    const hideTimer = setTimeout(() => setVisible(false), 2100);

    return () => {
      clearInterval(statusInterval);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.svg
              width="70"
              height="70"
              viewBox="0 0 100 100"
              className="mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0 0 16px rgba(0,229,255,0.4))" }}
            >
              <path
                d="M50 5 L90 20 V50 C90 75 72 92 50 97 C28 92 10 75 10 50 V20 Z"
                fill="none"
                stroke="url(#lg)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#00FF99" />
                </linearGradient>
              </defs>
            </motion.svg>
            <div className="mb-4 text-sm font-extrabold tracking-[4px] text-text">
              KISHOR GORADE
            </div>
            <div className="mx-auto mb-3 h-[2px] w-60 overflow-hidden rounded bg-slate-800">
              <motion.span
                className="block h-full bg-gradient-to-r from-primary to-accent shadow-glow"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            <p className="font-mono text-[0.7rem] tracking-[3px] text-text2">
              {statusMessages[statusIdx]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

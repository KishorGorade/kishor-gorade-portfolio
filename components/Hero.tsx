"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, FileDown, Radio } from "lucide-react";
import { siteConfig, rotatingRoles, achievements } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), 1800);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") { setDeleting(false); setWordIdx((wordIdx + 1) % words.length); }
        }
      },
      deleting ? 30 : 75
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words]);

  return text;
}

const telemetryFeed = [
  { label: "Endpoint", status: "Monitored", tone: "ok" },
  { label: "Cloud (Azure O365)", status: "Active", tone: "ok" },
  { label: "Email Gateway", status: "Scanning", tone: "warn" },
  { label: "Network Perimeter", status: "Clear", tone: "ok" },
];

export default function Hero() {
  const typed = useTypewriter(rotatingRoles);

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 grid-overlay opacity-40" style={{ maskImage: "radial-gradient(ellipse at 60% 30%, black 30%, transparent 75%)" }} />
      <HeroScene />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[60vh] bg-gradient-to-b from-navy/40 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 pb-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[0.72rem] tracking-wide text-text2">
            <Radio size={12} className="text-accent" />
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-accent" />
            </span>
            Actively monitoring · Available for Senior SOC / Threat Hunting roles
          </span>

          <h1 className="font-display mb-4 text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-text md:text-[3.6rem]">
            Defending enterprise <br />
            systems as <span className="text-gradient">{siteConfig.name}</span>
          </h1>

          <h2 className="mb-7 flex min-h-[2rem] items-center gap-2 font-mono text-lg text-primary2 md:text-xl">
            <span className="text-accent">›</span> {typed}
            <span className="animate-blink text-accent">_</span>
          </h2>

          <p className="mb-9 max-w-[540px] text-[0.98rem] leading-relaxed text-text2">
            {siteConfig.description}
          </p>

          <div className="mb-10 flex flex-wrap gap-3.5">
            <a
              href="/Kishor_Gorade_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-primary2 hover:shadow-glow"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-text transition-all hover:border-primary/50 hover:text-primary2"
            >
              View Experience
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid max-w-[440px] grid-cols-3 gap-6 border-t border-white/8 pt-6">
            {achievements.slice(0, 3).map((a) => (
              <div key={a.label}>
                <p className="font-display text-2xl font-semibold text-text">{a.value}+</p>
                <p className="mt-1 text-[0.72rem] leading-tight text-text3">{a.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16,1,0.3,1] }}
          className="relative hidden lg:block"
        >
          <div className="glass-strong relative overflow-hidden rounded-2xl p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between border-b border-white/6 pb-3">
              <span className="font-mono text-[0.68rem] tracking-[2px] text-text3">SECURITY TELEMETRY</span>
              <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-accent">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
                LIVE
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              {telemetryFeed.map((t) => (
                <div key={t.label} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-2.5">
                  <span className="text-[0.82rem] text-text2">{t.label}</span>
                  <span className={`rounded px-2 py-0.5 font-mono text-[0.65rem] ${t.tone === "ok" ? "bg-accent/10 text-accent" : "bg-signal/10 text-signal"}`}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-px w-full overflow-hidden bg-white/5">
              <motion.span
                className="block h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { siteConfig, rotatingRoles } from "@/lib/data";

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
          if (next === current) setTimeout(() => setDeleting(true), 1600);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setWordIdx((wordIdx + 1) % words.length);
          }
        }
      },
      deleting ? 35 : 85
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words]);

  return text;
}

const marqueeItems = [
  "THREAT DETECTION", "INCIDENT RESPONSE", "SIEM", "EDR / XDR", "MITRE ATT&CK",
  "THREAT HUNTING", "LOG ANALYSIS", "MALWARE ANALYSIS", "BLUE TEAM OPS", "IOC INVESTIGATION",
];

export default function Hero() {
  const typed = useTypewriter(rotatingRoles);

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28">
      <div
        className="absolute inset-0 z-0 animate-grid-pan opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="container relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 pb-20 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 font-mono text-[0.76rem] text-accent">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-accent" />
            </span>
            Available for SOC / Threat Hunting Roles
          </span>

          <h1 className="mb-3 text-4xl font-extrabold leading-[1.12] tracking-tight md:text-6xl">
            Securing systems <br /> as <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <h2 className="mb-6 flex min-h-[2rem] items-center gap-2 font-mono text-xl font-semibold text-primary md:text-2xl">
            <span className="font-bold text-accent">&gt;_</span> {typed}
            <span className="animate-blink text-accent">|</span>
          </h2>

          <p className="mb-8 max-w-[520px] text-base leading-relaxed text-text2">
            {siteConfig.description}
          </p>

          <div className="mb-7 flex flex-wrap gap-3.5">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-[#03131a] shadow-glow transition-transform hover:-translate-y-1 hover:shadow-glow-green"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[0.7rem] font-bold backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              GH
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[0.7rem] font-bold backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              IN
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <HeroScene />
          <div className="relative z-10 h-[320px] w-[260px] overflow-hidden rounded-[22px] border border-primary/20 bg-gradient-to-br from-card to-bg2 shadow-[0_0_70px_rgba(0,229,255,0.14)] md:h-[380px] md:w-[320px]">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-extrabold text-primary/15 md:text-7xl">
              KG
            </div>
            <motion.div
              className="absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {["top-2.5 left-2.5 border-t-2 border-l-2", "top-2.5 right-2.5 border-t-2 border-r-2", "bottom-2.5 left-2.5 border-b-2 border-l-2", "bottom-2.5 right-2.5 border-b-2 border-r-2"].map((cls, i) => (
              <div key={i} className={`absolute h-4 w-4 border-primary/70 ${cls}`} />
            ))}
          </div>

          {[
            { text: "Threat Blocked", cls: "-left-[12%] top-[5%]", dot: "bg-accent shadow-glow-green" },
            { text: "Alert Triaged", cls: "-left-[18%] bottom-[15%]", dot: "bg-warning" },
            { text: "IOC Matched", cls: "-right-[10%] -bottom-[4%]", dot: "bg-accent shadow-glow-green" },
          ].map((card, i) => (
            <motion.div
              key={card.text}
              className={`absolute z-20 flex items-center gap-2 rounded-lg border border-white/10 bg-card/65 px-4 py-2.5 font-mono text-[0.8rem] backdrop-blur-md ${card.cls}`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: "easeInOut" }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${card.dot}`} />
              {card.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mt-4 overflow-hidden border-t border-white/5 py-4">
        <div className="flex">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="flex animate-marquee gap-10 whitespace-nowrap pr-10 font-mono text-sm tracking-wide text-text2"
              style={row === 1 ? { animationDelay: "-15s" } : undefined}
              aria-hidden={row === 1}
            >
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center gap-10">
                  {item} <span className="text-primary">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[0.72rem] tracking-wide text-text2 md:flex">
        <span className="h-[30px] w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
        Scroll
      </div>
    </section>
  );
}

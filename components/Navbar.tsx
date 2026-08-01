"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import SocClock from "./SocClock";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-[100] border-b border-white/5 backdrop-blur-2xl transition-colors duration-300"
      style={{ background: scrolled ? "rgba(5,8,22,0.92)" : "rgba(5,8,22,0.55)" }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-xl font-extrabold tracking-wide">
          KG<span className="text-primary">.</span>
          <span className="h-[7px] w-[7px] animate-blink rounded-full bg-accent shadow-glow-green" />
        </a>

        <nav className="hidden gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 text-[0.85rem] font-medium text-text2 transition-colors hover:text-primary"
            >
              <span className="font-mono text-[0.68rem] text-primary opacity-70">{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="#contact"
            className="hidden rounded-md border border-primary px-5 py-2 text-[0.82rem] font-semibold text-primary transition-all hover:bg-primary/10 md:inline-block"
          >
            Hire Me
          </a>
          <SocClock />
          <button
            aria-label="Toggle menu"
            className="ml-4 flex flex-col gap-[5px] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="h-[2px] w-6 bg-text" />
            <span className="h-[2px] w-6 bg-text" />
            <span className="h-[2px] w-6 bg-text" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-5 border-b border-white/5 bg-[rgba(5,8,22,0.98)] p-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-text2 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import { navLinks } from "@/lib/data";
import SocClock from "./SocClock";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 200);
      setLastY(y);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActive(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-[100] border-b transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(7,9,13,0.75)" : "rgba(7,9,13,0.15)",
        borderColor: scrolled ? "rgba(255,255,255,0.06)" : "transparent",
        backdropFilter: "blur(18px)",
      }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <ShieldCheck size={20} className="text-accent" strokeWidth={1.75} />
          Kishor<span className="text-primary2">Gorade</span>
        </a>

        <nav className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-2 text-[0.83rem] font-medium transition-colors ${
                active === link.href ? "text-text" : "text-text2 hover:text-text"
              }`}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3.5 -bottom-[1px] h-[1.5px] bg-gradient-to-r from-primary to-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md border border-primary/40 px-5 py-2 text-[0.8rem] font-medium text-primary2 transition-all hover:border-primary hover:bg-primary/10 md:inline-flex"
          >
            Get in Touch
          </a>
          <SocClock />
          <button
            aria-label="Toggle menu"
            className="ml-4 text-text md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/5 bg-[rgba(7,9,13,0.97)] md:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm ${active === link.href ? "bg-primary/10 text-text" : "text-text2"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

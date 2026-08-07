"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b transition-all" style={{background: scrolled ? 'rgba(11,13,16,.92)' : 'rgba(11,13,16,.72)', borderColor: scrolled ? 'rgba(255,255,255,.06)' : 'transparent', backdropFilter: 'blur(14px)'}}>
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="flex items-center gap-2 font-display text-base font-semibold md:text-lg">
          <ShieldCheck size={18} className="text-accent" />
          <span>Kishor <span className="text-primary2">Gorade</span></span>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.slice(0,7).map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">{link.label}</a>
          ))}
          <a href="#contact" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white">Contact</a>
        </nav>

        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="overflow-hidden border-t border-white/5 bg-[#0b0d10] md:hidden">
            <div className="flex flex-col px-4 py-3">
              {navLinks.slice(0,7).map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/5">{link.label}</a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 rounded-md bg-primary px-3 py-3 text-sm font-medium text-white text-center">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

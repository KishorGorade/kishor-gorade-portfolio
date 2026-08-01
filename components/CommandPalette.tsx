"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { commandItems } from "@/lib/data";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.sub.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && filtered[activeIndex]) {
        goTo(filtered[activeIndex].href);
      }
    };
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open, filtered, activeIndex]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else { setQuery(""); setActiveIndex(0); }
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-7 left-7 z-50 hidden items-center gap-2 rounded-xl border border-white/10 bg-card/85 px-4 py-2.5 font-mono text-xs text-text2 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary hover:text-text sm:flex"
      >
        <span className="font-bold text-primary">⌘K</span> Quick Nav
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9996] flex items-start justify-center bg-[rgba(2,4,12,0.75)] pt-[12vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -16, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -16, scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <span className="text-primary">⌘</span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
                  placeholder="Search sections, projects, skills... (Esc to close)"
                  className="flex-1 bg-transparent text-sm text-text outline-none placeholder:text-text2"
                />
                <span className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[0.65rem] text-text2">
                  ESC
                </span>
              </div>
              <div className="max-h-[340px] overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <div className="p-6 text-center text-sm text-text2">No results found.</div>
                ) : (
                  filtered.map((item, i) => (
                    <div
                      key={item.title}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => goTo(item.href)}
                      className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg p-3 transition-colors ${
                        i === activeIndex ? "bg-primary/10" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base">{item.icon}</span>
                        <div>
                          <div className="text-sm text-text">{item.title}</div>
                          <div className="text-[0.72rem] text-text2">{item.sub}</div>
                        </div>
                      </div>
                      <span className="rounded border border-primary/30 px-2 py-0.5 font-mono text-[0.65rem] text-primary">
                        {item.tag}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

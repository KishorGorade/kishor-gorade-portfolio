"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "link" | "card" | "text";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const crosshairRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let raf: number;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMove);
    animateRing();

    const setupTargets = () => {
      const links = document.querySelectorAll("a, button");
      const cards = document.querySelectorAll(".enterprise-card, .spotlight-card");
      const texts = document.querySelectorAll("input, textarea");

      const onLinkEnter = () => setMode("link");
      const onCardEnter = () => setMode("card");
      const onTextEnter = () => setMode("text");
      const onLeave = () => setMode("default");

      links.forEach((el) => { el.addEventListener("mouseenter", onLinkEnter); el.addEventListener("mouseleave", onLeave); });
      cards.forEach((el) => { el.addEventListener("mouseenter", onCardEnter); el.addEventListener("mouseleave", onLeave); });
      texts.forEach((el) => { el.addEventListener("mouseenter", onTextEnter); el.addEventListener("mouseleave", onLeave); });

      return () => {
        links.forEach((el) => { el.removeEventListener("mouseenter", onLinkEnter); el.removeEventListener("mouseleave", onLeave); });
        cards.forEach((el) => { el.removeEventListener("mouseenter", onCardEnter); el.removeEventListener("mouseleave", onLeave); });
        texts.forEach((el) => { el.removeEventListener("mouseenter", onTextEnter); el.removeEventListener("mouseleave", onLeave); });
      };
    };

    const cleanup = setupTargets();
    const observer = new MutationObserver(() => cleanup());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
      cleanup();
      observer.disconnect();
    };
  }, []);

  const ringSize = mode === "card" ? 64 : mode === "link" ? 46 : mode === "text" ? 4 : 32;
  const ringColor =
    mode === "card" ? "rgba(34,211,238,0.8)" : mode === "link" ? "rgba(59,130,246,0.85)" : "rgba(59,130,246,0.45)";
  const showCrosshair = mode === "default" || mode === "link";
  const showLabel = mode === "card";

  return (
    <div className="hidden md:block">
      {/* Radar ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-300 ease-out"
        style={{ width: ringSize, height: ringSize, borderColor: ringColor, borderWidth: mode === "text" ? 0 : 1.4 }}
      >
        {mode === "default" && (
          <span className="absolute inset-0 animate-[pulse-ring_2.4s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full border border-primary/40" />
        )}
        {showLabel && (
          <span ref={labelRef} className="absolute inset-0 flex items-center justify-center font-mono text-[0.55rem] tracking-widest text-accent">
            VIEW
          </span>
        )}
      </div>

      {/* Crosshair ticks - precision reticle feel */}
      {showCrosshair && (
        <div
          ref={crosshairRef}
          className="pointer-events-none fixed z-[9997] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
          style={{ left: ringRef.current?.style.left, top: ringRef.current?.style.top, width: ringSize + 22, height: ringSize + 22 }}
        />
      )}

      {/* Precision dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9998] h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-150"
        style={{ boxShadow: "0 0 6px #22D3EE" }}
      />
    </div>
  );
}

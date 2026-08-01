"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

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
      if (glowRef.current) {
        glowRef.current.style.left = `${mouseX}px`;
        glowRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMove);
    animateRing();

    const interactive = document.querySelectorAll(
      "a, button, .spotlight-card, input, textarea"
    );
    const onEnter = () => {
      dotRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(0)");
      ringRef.current?.style.setProperty("width", "54px");
      ringRef.current?.style.setProperty("height", "54px");
      ringRef.current?.style.setProperty("border-color", "rgba(0,255,153,0.7)");
    };
    const onLeave = () => {
      dotRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
      ringRef.current?.style.setProperty("width", "34px");
      ringRef.current?.style.setProperty("height", "34px");
      ringRef.current?.style.setProperty("border-color", "rgba(0,229,255,0.5)");
    };
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.07), transparent 70%)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9997] h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200"
        style={{ borderColor: "rgba(0,229,255,0.5)" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9998] h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-transform duration-150"
        style={{ boxShadow: "0 0 8px #00E5FF" }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface Blip {
  x: number; y: number; color: string; type: "ok" | "warn" | "danger"; born: number;
}

const ipPool = ["192.168.1.", "10.0.0.", "172.16.4.", "203.0.113.", "198.51.100."];
const feedMsgs: Record<string, string[]> = {
  ok: ["Connection allowed", "Baseline traffic", "Signed process"],
  warn: ["Unusual login time", "Multiple failed logins", "Rare parent process"],
  danger: ["C2 beacon detected", "Known malicious hash", "Lateral movement attempt"],
};

export default function RadarWidget() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [feed, setFeed] = useState<{ id: number; ip: string; msg: string; type: string }[]>([]);
  const feedIdRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, maxR = W / 2 - 6;
    let sweepAngle = 0;
    let blips: Blip[] = [];
    let lastSpawn = 0;
    let raf: number;

    const randBlip = (): Blip => {
      const types: { type: "ok" | "warn" | "danger"; color: string; weight: number }[] = [
        { type: "ok", color: "#00FF99", weight: 0.55 },
        { type: "warn", color: "#FACC15", weight: 0.3 },
        { type: "danger", color: "#EF4444", weight: 0.15 },
      ];
      let r = Math.random(), acc = 0, chosen = types[0];
      for (const t of types) { acc += t.weight; if (r <= acc) { chosen = t; break; } }
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * maxR * 0.85 + 10;
      return { x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist, color: chosen.color, type: chosen.type, born: performance.now() };
    };

    for (let i = 0; i < 8; i++) blips.push(randBlip());

    const pushFeed = (type: "ok" | "warn" | "danger") => {
      const ip = ipPool[Math.floor(Math.random() * ipPool.length)] + Math.floor(Math.random() * 254 + 1);
      const msg = feedMsgs[type][Math.floor(Math.random() * feedMsgs[type].length)];
      feedIdRef.current += 1;
      setFeed((prev) => [{ id: feedIdRef.current, ip, msg, type }, ...prev].slice(0, 4));
    };

    const draw = (ts: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(0,229,255,0.18)";
      for (let i = 1; i <= 3; i++) { ctx.beginPath(); ctx.arc(cx, cy, (maxR * i) / 3, 0, Math.PI * 2); ctx.stroke(); }
      ctx.beginPath();
      ctx.moveTo(cx - maxR, cy); ctx.lineTo(cx + maxR, cy);
      ctx.moveTo(cx, cy - maxR); ctx.lineTo(cx, cy + maxR);
      ctx.stroke();

      sweepAngle += 0.018;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, sweepAngle - 0.5, sweepAngle);
      ctx.closePath();
      ctx.fillStyle = "rgba(0,229,255,0.12)";
      ctx.fill();

      blips.forEach((b) => {
        const age = (ts - b.born) / 1000;
        const pulse = 0.6 + Math.sin(age * 3) * 0.4;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.globalAlpha = 0.5 + pulse * 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3.2 + pulse * 5, 0, Math.PI * 2);
        ctx.strokeStyle = b.color;
        ctx.globalAlpha = 0.25 * pulse;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      if (ts - lastSpawn > 1400) {
        lastSpawn = ts;
        if (blips.length > 10) blips.shift();
        const nb = randBlip();
        blips.push(nb);
        pushFeed(nb.type);
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="spotlight-card flex flex-col gap-3.5 rounded-2xl border border-white/5 bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.72rem] tracking-[2px] text-text2">LIVE THREAT RADAR</span>
        <span className="flex items-center gap-1.5 font-mono text-[0.7rem] text-accent">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-danger shadow-[0_0_8px_#EF4444]" />
          LIVE
        </span>
      </div>
      <div className="relative flex justify-center">
        <canvas ref={canvasRef} width={260} height={260} className="rounded-full" style={{ background: "radial-gradient(circle, rgba(0,229,255,0.04), transparent 70%)" }} />
        <div className="absolute -bottom-1.5 left-0 flex gap-3 font-mono text-[0.68rem] text-text2">
          <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-full bg-accent" />Benign</span>
          <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-full bg-warning" />Suspicious</span>
          <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-full bg-danger" />Malicious</span>
        </div>
      </div>
      <div className="flex max-h-[110px] flex-col gap-2 overflow-hidden border-t border-white/5 pt-3">
        {feed.map((item) => (
          <div key={item.id} className="flex animate-[feedin_0.4s_forwards] items-center justify-between gap-2 font-mono text-[0.72rem] text-text2 opacity-0" style={{ animationFillMode: "forwards" }}>
            <span className="text-text">{item.ip}</span>
            <span className="flex-1 truncate">{item.msg}</span>
            <span
              className={`rounded px-1.5 py-0.5 text-[0.65rem] ${
                item.type === "ok" ? "bg-accent/10 text-accent" : item.type === "warn" ? "bg-warning/10 text-warning" : "bg-danger/15 text-danger"
              }`}
            >
              {item.type.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

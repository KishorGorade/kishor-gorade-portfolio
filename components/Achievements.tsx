"use client";

import Reveal from "./Reveal";
import Counter from "./Counter";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="section bg-bg2 py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">06 / Impact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Achievements <span className="gradient-text">in Numbers</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.label} className="rounded-2xl border border-white/5 bg-card p-8 text-center">
                <Counter target={a.value} className="text-4xl font-extrabold text-primary" />
                <p className="mt-2.5 text-[0.85rem] text-text2">{a.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

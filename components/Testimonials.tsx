"use client";

import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">07 / Feedback</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            What People <span className="gradient-text">Say</span>
          </h2>
        </Reveal>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-[330px] snap-start rounded-2xl border border-white/5 bg-card p-7 transition-colors hover:border-primary/30"
            >
              <p className="mb-4.5 leading-relaxed text-text2">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <h5 className="text-[0.88rem] font-medium">{t.name}</h5>
                  <span className="text-[0.75rem] text-text2">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

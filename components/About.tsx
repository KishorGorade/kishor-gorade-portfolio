"use client";

import Reveal from "./Reveal";
import Counter from "./Counter";
import RadarWidget from "./RadarWidget";
import { stats } from "@/lib/data";

const timelineSteps = [
  "Cybersecurity Learning & Labs",
  "SOC Internship",
  "SOC Analyst @ Qualys",
  "Professional Growth & Automation",
];

export default function About() {
  return (
    <section id="about" className="section relative py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">01 / About</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Defending Systems, <span className="gradient-text">One Alert at a Time</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <Reveal>
            <RadarWidget />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-4 leading-relaxed text-text2">
                I&apos;m a SOC Analyst focused on real-time security monitoring, alert triage, and incident
                response. My work spans SIEM platforms, EDR tools, and threat intelligence — turning raw
                telemetry into actionable defense.
              </p>
              <p className="mb-6 leading-relaxed text-text2">
                My goal is to grow into a senior threat hunter / detection engineer role, building
                automation that helps blue teams respond faster and smarter. Cybersecurity isn&apos;t just my
                job — it&apos;s a continuous learning obsession.
              </p>
              <div className="flex flex-col gap-3">
                {timelineSteps.map((step) => (
                  <div key={step} className="flex items-center gap-2.5 text-sm text-text2">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="spotlight-card rounded-2xl border border-white/5 bg-card p-7 text-center transition-transform hover:-translate-y-2">
                  <Counter target={s.value} className="text-3xl font-extrabold text-accent" />
                  <p className="mt-2 text-[0.84rem] text-text2">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

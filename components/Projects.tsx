"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-y border-white/[0.05] bg-[#0f1318] py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <Reveal>
          <SectionHeader index="04" eyebrow="Project work" title={<>Operational projects with <span className="text-gradient">practical security value.</span></>}>
            These projects reflect workflow improvement, automation support, and detection optimization within security operations environments.
          </SectionHeader>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.slice(0,4).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="enterprise-card rounded-2xl p-6 md:p-7">
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/6 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Selected Project</p>
                    <h3 className="mt-2 font-display text-xl font-medium text-white">{p.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">SOC</span>
                </div>
                <p className="text-sm leading-7 text-slate-300">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

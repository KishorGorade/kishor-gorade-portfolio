"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { certifications, education } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1160px] px-4 md:px-6">
        <Reveal>
          <SectionHeader index="05" eyebrow="Credentials" title={<>Certifications and <span className="text-gradient">academic background.</span></>} />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1fr_.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <article className="enterprise-card rounded-2xl p-5">
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">Certification</p>
                  <h3 className="font-display text-lg font-medium text-white">{c.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{c.org}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08}>
            <div className="enterprise-card rounded-2xl p-6">
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-slate-500">Education</p>
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.degree} className="border-b border-white/6 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-display text-lg font-medium text-white">{e.degree}</h3>
                    <p className="mt-1 text-sm text-slate-300">{e.school}</p>
                    <p className="mt-1 text-sm text-slate-400">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

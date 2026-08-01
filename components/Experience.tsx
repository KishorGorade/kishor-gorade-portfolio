"use client";

import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">03 / Journey</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </Reveal>

        <div className="relative border-l-2 border-primary/15 pl-8">
          {experience.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 0.1} className="relative mb-11 pl-2">
              <span className="absolute -left-[41px] top-0.5 h-[15px] w-[15px] rounded-full bg-primary shadow-[0_0_14px_#00E5FF]" />
              <h3 className="mb-1 text-xl font-semibold">{exp.title}</h3>
              <span className="mb-3 block font-mono text-[0.82rem] text-accent">{exp.date}</span>
              <ul className="flex flex-wrap gap-2">
                {exp.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-text2 transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

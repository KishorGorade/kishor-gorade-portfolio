"use client";

import { ChevronRight, Building2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/data";

export default function Experience() {
 return <section id="experience" className="py-28 md:py-36"><div className="container mx-auto max-w-[1240px] px-6">
  <Reveal><SectionHeader index="03" eyebrow="Professional journey" title={<>Enterprise SOC experience, <span className="text-gradient">operationally grounded.</span></>}/></Reveal>
  <div className="relative ml-3 border-l border-primary/25 pl-7 md:ml-6 md:pl-10">{experience.map((exp,i)=><Reveal key={exp.title} delay={i*.08} className="relative mb-8 last:mb-0">
   <span className="absolute -left-[33px] top-7 h-3 w-3 rounded-full border-[3px] border-bg bg-primary shadow-glow md:-left-[45px]"/>
   <article className="enterprise-card rounded-2xl p-6 md:p-8"><div className="mb-6 flex flex-wrap items-start justify-between gap-3 border-b border-white/[.06] pb-5"><div className="flex gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10"><Building2 size={18} className="text-primary2"/></div><div><h3 className="font-display text-lg font-medium">{exp.title}</h3><p className="mt-1 font-mono text-xs text-accent">{exp.date}</p></div></div><span className="rounded-full border border-white/[.08] px-3 py-1 font-mono text-[.63rem] tracking-wider text-text3">ENTERPRISE SOC</span></div>
   <div className="grid gap-2 md:grid-cols-2">{exp.items.map(item=><div key={item} className="flex items-start gap-2 text-sm leading-relaxed text-text2"><ChevronRight size={15} className="mt-[3px] shrink-0 text-primary"/>{item}</div>)}</div></article>
  </Reveal>)}</div>
 </div></section>;
}

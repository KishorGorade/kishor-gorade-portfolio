"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";

export default function Skills() {
 return <section id="skills" className="border-y border-white/[0.045] bg-bg2 py-28 md:py-36"><div className="container mx-auto max-w-[1240px] px-6">
  <Reveal><SectionHeader index="02" eyebrow="Capability ecosystem" title={<>Enterprise tooling, <span className="text-gradient">operational context.</span></>}>A focused security stack across monitoring, investigation, cloud, detection engineering, and automation.</SectionHeader></Reveal>
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{skills.map((s,i)=><motion.article key={s.cat} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.45,delay:(i%4)*.06}} className="enterprise-card spotlight-card min-h-[220px] rounded-xl p-5">
   <div className="mb-5 flex items-center justify-between"><span className="font-mono text-[.65rem] tracking-[.14em] text-accent">CAP.{String(i+1).padStart(2,'0')}</span><span className="text-[1.15rem] opacity-70">{s.icon}</span></div>
   <h3 className="font-display mb-4 text-base font-medium">{s.cat}</h3><div className="flex flex-wrap gap-1.5">{s.tags.map(t=><span key={t} className="rounded border border-white/[.07] bg-white/[.025] px-2 py-1 text-[.69rem] text-text2">{t}</span>)}</div>
  </motion.article>)}</div>
 </div></section>;
}

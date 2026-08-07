"use client";

import { ShieldCheck, Network, ScanSearch, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import RadarWidget from "./RadarWidget";
import SectionHeader from "./SectionHeader";
import { stats } from "@/lib/data";

const operatingModel = [
  { icon: ScanSearch, title: "Detect", text: "Correlate telemetry across endpoint, cloud, identity, email, and network sources." },
  { icon: Network, title: "Investigate", text: "Validate indicators and establish scope using threat intelligence and behavioral context." },
  { icon: Workflow, title: "Respond", text: "Coordinate containment, remediation, and root-cause documentation with stakeholders." },
];

export default function About() {
  return <section id="about" className="relative py-28 md:py-36">
    <div className="container mx-auto max-w-[1240px] px-6">
      <Reveal><SectionHeader index="01" eyebrow="Operating profile" title={<>Security operations built around <span className="text-gradient">clarity and response.</span></>}>
        I work at the intersection of telemetry, threat intelligence, and incident response—turning high-volume signals into decisive action.
      </SectionHeader></Reveal>
      <div className="grid gap-7 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal><div className="enterprise-card rounded-2xl p-6 md:p-7"><RadarWidget /></div></Reveal>
        <Reveal delay={0.1}><div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {operatingModel.map(({icon: Icon,title,text},i)=><div key={title} className="enterprise-card group rounded-2xl p-5">
            <div className="mb-5 flex items-center justify-between"><Icon size={20} strokeWidth={1.5} className="text-accent"/><span className="font-mono text-[0.65rem] text-text3">0{i+1}</span></div>
            <h3 className="font-display mb-2 text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-text2">{text}</p>
          </div>)}
        </div></Reveal>
      </div>
      <Reveal delay={0.12}><div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((s)=><div key={s.label} className="bg-bg2 px-6 py-7"><Counter target={s.value} className="font-display text-3xl font-semibold text-primary2"/><p className="mt-1.5 text-xs text-text2">{s.label}</p></div>)}
      </div></Reveal>
    </div>
  </section>;
}

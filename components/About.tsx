"use client";

import { Shield, Search, Workflow, FileText } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHeader from "./SectionHeader";
import { stats } from "@/lib/data";

const pillars = [
  { icon: Shield, title: 'Monitor', text: 'Track alerts across endpoint, email, cloud, identity, and SIEM platforms with a strong focus on triage quality and escalation discipline.' },
  { icon: Search, title: 'Investigate', text: 'Validate suspicious activity using IOC analysis, event correlation, malware analysis platforms, and contextual review across multiple sources.' },
  { icon: Workflow, title: 'Respond', text: 'Support containment, remediation, and root-cause analysis while collaborating with CSIRT and infrastructure stakeholders.' },
  { icon: FileText, title: 'Document', text: 'Maintain clear incident notes, SOP alignment, handover quality, and post-incident learning that strengthens SOC maturity.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <Reveal>
          <SectionHeader index="01" eyebrow="Professional summary" title={<>Focused on <span className="text-gradient">operational security outcomes.</span></>}>
            My work is grounded in real SOC execution: reducing noise, validating threats, supporting response, and improving visibility across enterprise environments.
          </SectionHeader>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="enterprise-card rounded-2xl p-6 md:p-8">
              <p className="text-sm leading-8 text-slate-300 md:text-[1.02rem]">
                I specialize in enterprise cybersecurity operations with experience across SIEM, EDR, vulnerability management, threat intelligence, and cloud/email investigation. My approach is practical and process-driven: understand the signal, confirm the scope, contain the impact, and document the outcome clearly.
              </p>
              <p className="mt-5 text-sm leading-8 text-slate-300 md:text-[1.02rem]">
                Rather than presenting cybersecurity as visual spectacle, this portfolio focuses on the work itself—monitoring, investigation, response support, and continuous improvement inside real security operations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-bg2 px-5 py-6 md:px-6 md:py-8">
                  <Counter target={s.value} className="font-display text-3xl font-semibold text-white" />
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <article className="enterprise-card rounded-2xl p-5">
                <div className="mb-4 inline-flex rounded-lg border border-white/8 bg-white/[0.03] p-2 text-primary2"><Icon size={18} /></div>
                <h3 className="font-display text-lg font-medium text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FileDown, Mail, ShieldCheck, SearchCheck, Activity, Radar } from "lucide-react";
import { siteConfig } from "@/lib/data";

const metrics = [
  { label: 'Experience', value: '3+ Years' },
  { label: 'Current Role', value: 'Qualys' },
  { label: 'Core Area', value: 'SOC / IR / Hunting' },
];

const focusAreas = [
  { icon: ShieldCheck, title: 'Incident Response', text: 'Triage, investigation, containment, root cause analysis, and remediation support across enterprise environments.' },
  { icon: SearchCheck, title: 'Threat Hunting', text: 'IOC validation, multi-source correlation, adversary TTP mapping, and proactive hunting aligned to MITRE ATT&CK.' },
  { icon: Activity, title: 'Detection & Monitoring', text: 'Hands-on monitoring of SIEM, EDR, cloud, email, and vulnerability telemetry with alert tuning and escalation.' },
  { icon: Radar, title: 'Operational Security', text: 'Cross-functional SOC execution with documentation, ticketing, investigation discipline, and continuous improvement.' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="hero-shell overflow-hidden rounded-[28px] px-5 py-8 md:px-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <p className="eyebrow mb-4 section-label">Enterprise Cybersecurity Portfolio</p>
              <h1 className="font-display max-w-[11ch] text-4xl font-semibold leading-[1.06] text-white md:text-[4.2rem]">
                Security Operations Engineer with a <span className="text-gradient">real operational background.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {siteConfig.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/Kishor_Gorade_Resume.pdf" download className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary2">
                  <FileDown size={16} /> Download Resume
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.04]">
                  <Mail size={16} /> Contact
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.label} className="metric-tile rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{m.label}</p>
                    <p className="mt-2 text-sm font-medium text-slate-100">{m.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>
              <div className="rounded-2xl border border-white/8 bg-black/15 p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between border-b border-white/6 pb-3">
                  <div>
                    <p className="text-sm font-medium text-white">Recruiter Overview</p>
                    <p className="mt-1 text-xs text-slate-400">A quick and direct profile summary</p>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary2">Open to roles</span>
                </div>

                <div className="space-y-4">
                  <div className="enterprise-card-soft rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Current Position</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">Security Operations Engineer at Qualys, focused on enterprise alert monitoring, incident response, and threat hunting.</p>
                  </div>
                  <div className="enterprise-card-soft rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Tools & Platforms</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Elastic SIEM','Qualys EDR','Qualys VMDR','Azure O365','Proofpoint TAP','Splunk','CrowdStrike','ServiceNow'].map((t) => (
                        <span key={t} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="enterprise-card-soft rounded-xl p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Professional Focus</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">SOC monitoring, incident triage, IOC analysis, phishing and BEC investigation, threat hunting, detection tuning, and SOC automation support.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, text }, i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: i * 0.05 }} className="enterprise-card rounded-2xl p-5">
              <div className="mb-4 inline-flex rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary2"><Icon size={18} /></div>
              <h3 className="font-display text-lg font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FileDown, Mail, ShieldCheck, SearchCheck, Activity, Radar, MapPin, Building2, Layers } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const focusAreas = [
  { icon: ShieldCheck, title: 'Incident Response', text: 'Triage, investigation, containment, root cause analysis, and remediation support across enterprise environments.' },
  { icon: SearchCheck, title: 'Threat Hunting', text: 'IOC validation, multi-source correlation, adversary TTP mapping, and proactive hunting aligned to MITRE ATT&CK.' },
  { icon: Activity, title: 'Detection & Monitoring', text: 'Hands-on monitoring of SIEM, EDR, cloud, email, and vulnerability telemetry with alert tuning and escalation.' },
  { icon: Radar, title: 'Operational Security', text: 'Cross-functional SOC execution with documentation, ticketing, investigation discipline, and continuous improvement.' },
];

const coreDomains = ['SIEM & Detection', 'Incident Response', 'Threat Hunting', 'Cloud & Email Security', 'Vulnerability Mgmt'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-44">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="hero-shell overflow-hidden rounded-[28px] px-1 py-2 md:px-4 md:py-6">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-start">

            {/* LEFT — editorial identity block */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="signature-line eyebrow mb-8">Enterprise Cybersecurity Portfolio</p>

              <p className="font-display text-lg font-medium text-slate-500 md:text-xl">Hello, I&apos;m</p>

              <h1 className="font-display mt-2 text-[3rem] font-semibold leading-[1.02] text-white md:text-[5rem]">
                {siteConfig.name}
              </h1>

              <p className="signature-line mt-6 font-display text-lg font-medium text-primary2 md:text-xl">
                {siteConfig.role}
              </p>

              <p className="mt-8 max-w-xl text-base leading-[1.9] text-slate-400 md:text-lg">
                {siteConfig.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/Kishor_Gorade_Resume.pdf" download className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-white transition hover:bg-primary2">
                  <FileDown size={16} /> Download Resume
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/12 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.03]">
                  <Mail size={16} /> Contact
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Executive Identity Panel */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
              <div className="exec-card overflow-hidden rounded-2xl">
                <div className="flex items-center justify-between px-6 pt-6">
                  <span className="exec-badge text-primary2">Executive Profile</span>
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="exec-badge text-slate-400">Open to roles</span>
                  </span>
                </div>

                <div className="flex items-center gap-4 px-6 pt-6">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_18px_30px_-18px_rgba(0,0,0,0.85)]">
                    <Image src="/profile.jpg" alt="Kishor Gorade" fill sizes="72px" className="object-cover object-top" priority />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">{siteConfig.name}</p>
                    <p className="mt-0.5 text-sm text-slate-400">{siteConfig.role}</p>
                  </div>
                </div>

                <div className="exec-divider mx-6 my-6" />

                <div className="space-y-5 px-6">
                  <div className="flex items-start gap-3">
                    <Building2 size={16} className="mt-0.5 shrink-0 text-primary2" />
                    <div>
                      <p className="exec-badge text-slate-500">Company</p>
                      <p className="mt-1 text-sm text-slate-200">Qualys</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-primary2" />
                    <div>
                      <p className="exec-badge text-slate-500">Location</p>
                      <p className="mt-1 text-sm text-slate-200">{siteConfig.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers size={16} className="mt-0.5 shrink-0 text-primary2" />
                    <div>
                      <p className="exec-badge text-slate-500">Core Domains</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {coreDomains.map((d) => (
                          <span key={d} className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="exec-divider mx-6 my-6" />

                <div className="grid grid-cols-3 divide-x divide-white/[0.06] px-6 pb-6">
                  <div className="pr-3">
                    <p className="font-display text-xl font-semibold text-white">3+</p>
                    <p className="mt-1 text-[11px] text-slate-500">Years Exp.</p>
                  </div>
                  <div className="px-3">
                    <p className="font-display text-xl font-semibold text-white">24x7</p>
                    <p className="mt-1 text-[11px] text-slate-500">SOC Coverage</p>
                  </div>
                  <div className="pl-3">
                    <p className="font-display text-xl font-semibold text-white">8+</p>
                    <p className="mt-1 text-[11px] text-slate-500">Platforms</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, text }, i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: i * 0.05 }} className="enterprise-card rounded-2xl p-6">
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary2"><Icon size={18} /></div>
              <h3 className="font-display text-lg font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

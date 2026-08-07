"use client";

import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/lib/data";

const items = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Professional profile', href: siteConfig.linkedin },
  { icon: Github, label: 'GitHub', value: 'Code and profile', href: siteConfig.github },
  { icon: MapPin, label: 'Location', value: siteConfig.location },
  { icon: Phone, label: 'Phone', value: siteConfig.phone },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.05] bg-[#0f1318] py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <Reveal>
          <SectionHeader index="06" eyebrow="Contact" title={<>Clear, direct, and <span className="text-gradient">professional communication.</span></>}>For relevant opportunities in SOC operations, incident response, threat hunting, and related cybersecurity roles, email is the fastest way to reach me.</SectionHeader>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1fr_.95fr]">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map(({ icon: Icon, label, value, href }) => (
                href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="enterprise-card rounded-2xl p-5 hover:bg-white/[0.02]">
                    <div className="inline-flex rounded-lg border border-white/8 bg-white/[0.03] p-2 text-primary2"><Icon size={18} /></div>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200 break-all">{value}</p>
                  </a>
                ) : (
                  <div key={label} className="enterprise-card rounded-2xl p-5">
                    <div className="inline-flex rounded-lg border border-white/8 bg-white/[0.03] p-2 text-primary2"><Icon size={18} /></div>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
                  </div>
                )
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="enterprise-card rounded-2xl p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Availability</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-white">Open to strong cybersecurity opportunities.</h3>
              <p className="mt-4 text-sm leading-8 text-slate-300">
                This portfolio is intentionally designed to present real operational capability rather than visual noise. If your team is hiring for SOC, blue team, incident response, or detection-focused roles, I would be glad to connect.
              </p>
              <a href={`mailto:${siteConfig.email}`} className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary2">Email Kishor</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

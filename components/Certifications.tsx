"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { certifications, education } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">05 / Credentials</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Certifications &amp; <span className="gradient-text">Education</span>
          </h2>
        </Reveal>

        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-white/5 bg-card p-6 text-center transition-[border-color,box-shadow] hover:border-accent hover:shadow-[0_20px_40px_rgba(0,255,153,0.12)]"
            >
              <div className="mb-3 text-3xl">{c.icon}</div>
              <h4 className="mb-1 text-[0.95rem] font-semibold">{c.name}</h4>
              <p className="text-[0.78rem] text-text2">{c.org}</p>
            </motion.div>
          ))}
        </div>

        <Reveal>
          <h3 className="mb-6 text-xl font-semibold">Education</h3>
          <div className="flex flex-col gap-4">
            {education.map((e) => (
              <div
                key={e.degree}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/5 bg-card px-6 py-4 transition-colors hover:border-primary/40"
              >
                <div>
                  <p className="font-medium text-text">{e.degree}</p>
                  <p className="text-sm text-text2">{e.school}</p>
                </div>
                <span className="rounded-md bg-primary/10 px-3 py-1 font-mono text-[0.78rem] text-primary">{e.detail}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

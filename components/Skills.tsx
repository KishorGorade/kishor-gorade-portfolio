"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg2 py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">02 / Arsenal</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Tools &amp; <span className="gradient-text">Technical Skills</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.09 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/5 bg-card p-6 transition-[border-color,box-shadow] hover:border-primary hover:shadow-glow"
            >
              <div className="mb-3.5 flex items-center gap-2.5 text-[0.96rem] font-bold text-primary">
                <span>{s.icon}</span> {s.cat}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/5 bg-primary/5 px-2.5 py-1 text-[0.74rem] text-text2 transition-colors hover:border-accent hover:text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

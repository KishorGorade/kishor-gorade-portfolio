"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section bg-bg2 py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">04 / Work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -12 }}
              className="overflow-hidden rounded-2xl border border-white/5 bg-card transition-[border-color,box-shadow] hover:border-primary/30 hover:shadow-[0_28px_55px_rgba(0,229,255,0.16)]"
            >
              <div className="relative flex h-[170px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 to-accent/10 text-4xl">
                {p.icon}
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="mb-3.5 text-sm leading-relaxed text-text2">{p.desc}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-primary/10 px-2.5 py-1 text-[0.7rem] text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="section bg-bg2 py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">08 / Write-ups</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Latest <span className="gradient-text">Blog &amp; Threat Notes</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-2xl border border-white/5 bg-card transition-[border-color,box-shadow] hover:border-primary hover:shadow-glow"
            >
              <div className="flex h-[130px] items-center justify-center bg-gradient-to-br from-accent/10 to-primary/10 text-3xl">
                {b.icon}
              </div>
              <div className="p-5">
                <span className="font-mono text-[0.72rem] text-accent">{b.tag}</span>
                <h4 className="my-2 text-base font-semibold">{b.title}</h4>
                <p className="text-sm leading-relaxed text-text2">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

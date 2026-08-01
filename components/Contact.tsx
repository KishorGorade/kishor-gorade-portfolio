"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section bg-bg2 py-28">
      <div className="container mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">10 / Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-11 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-card p-8">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="rounded-lg border border-white/10 bg-bg2 px-4 py-3 text-text outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="rounded-lg border border-white/10 bg-bg2 px-4 py-3 text-text outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <textarea
                rows={5}
                placeholder="Message"
                required
                className="rounded-lg border border-white/10 bg-bg2 px-4 py-3 text-text outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-[#03131a] shadow-glow transition-transform hover:-translate-y-1 hover:shadow-glow-green"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col justify-center gap-4">
              {[
                { icon: "📍", text: siteConfig.location },
                { icon: "✉️", text: siteConfig.email },
                { icon: "☎️", text: siteConfig.phone },
                { icon: "🔗", text: "linkedin.com/in/kishor-gorade-691a90251" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-card px-5 py-4 text-[0.95rem] text-text2 transition-all hover:translate-x-1.5 hover:border-primary hover:text-text"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

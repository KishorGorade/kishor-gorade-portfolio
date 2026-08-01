"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";

const terminalLines = [
  "$ whoami",
  "kishor.gorade — Security Operations Engineer",
  "$ cat skills.txt",
  "Splunk | QRadar | CrowdStrike | Qualys EDR | IR",
  "$ ./download_resume.sh",
  "Resume ready for download...",
];

export default function Resume() {
  const termRef = useRef<HTMLDivElement>(null);
  const inView = useInView(termRef, { once: true, amount: 0.3 });
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!inView) return;
    let lineIdx = 0, charIdx = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (lineIdx >= terminalLines.length) return;
      const line = terminalLines[lineIdx];
      charIdx++;
      const prevLines = terminalLines.slice(0, lineIdx).join("\n");
      setOutput(prevLines + (lineIdx > 0 ? "\n" : "") + line.slice(0, charIdx));
      if (charIdx === line.length) {
        lineIdx++; charIdx = 0;
        timeout = setTimeout(typeNext, 500);
        return;
      }
      timeout = setTimeout(typeNext, 35);
    };
    typeNext();
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <section id="resume" className="section py-28">
      <div className="container mx-auto max-w-[1200px] px-6 text-center">
        <Reveal>
          <p className="mb-3 font-mono text-[0.76rem] uppercase tracking-[3px] text-primary">09 / Resume</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-3xl font-extrabold tracking-tight md:text-4xl">
            Get My <span className="gradient-text">Resume</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl border border-white/5 bg-card p-10">
            <div ref={termRef} className="mb-6 min-h-[150px] rounded-xl border border-white/5 bg-[#03060f] p-4 text-left font-mono text-sm">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="ml-2 text-[0.72rem] text-text2">zsh — kishor@soc</p>
              </div>
              <div className="whitespace-pre-wrap text-accent">{output}</div>
            </div>
            <a
              href="/KISHOR_GORADE_Security_Operations_Engineer.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-[#03131a] shadow-glow transition-transform hover:-translate-y-1 hover:shadow-glow-green"
            >
              ⬇ Download Resume (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

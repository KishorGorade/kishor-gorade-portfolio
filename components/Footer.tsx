import { siteConfig } from "@/lib/data";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 py-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
      <div className="container relative z-10 mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6">
        <p className="text-[0.85rem] text-text2">
          © 2026 {siteConfig.name}. All rights reserved. Built with intent to defend.
        </p>
        <div className="flex gap-4.5 text-[0.85rem]">
          <a href={siteConfig.github} className="text-text2 transition-colors hover:text-primary">GitHub</a>
          <a href={siteConfig.linkedin} className="text-text2 transition-colors hover:text-primary">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`} className="text-text2 transition-colors hover:text-primary">Email</a>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}

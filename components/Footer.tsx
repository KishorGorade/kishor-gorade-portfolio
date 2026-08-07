import { siteConfig } from "@/lib/data";
export default function Footer(){
 return <footer className="border-t border-white/5 py-8"><div className="mx-auto flex max-w-[1160px] flex-col gap-2 px-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6"><p>© 2026 {siteConfig.name}. All rights reserved.</p><p>{siteConfig.role} · Pune, Maharashtra</p></div></footer>
}

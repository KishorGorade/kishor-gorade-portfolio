import { ReactNode } from "react";

export default function SectionHeader({ index, eyebrow, title, children }: { index: string; eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow section-label mb-4">{index} / {eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-text md:text-[2.35rem]">{title}</h2>
      {children && <div className="mt-4 text-[0.95rem] leading-relaxed text-text2">{children}</div>}
    </div>
  );
}

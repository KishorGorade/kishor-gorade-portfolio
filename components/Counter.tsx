"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Counter({ target, className = "" }: { target: number; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const tick = () => {
      cur += step;
      if (cur >= target) { setValue(target); return; }
      setValue(cur);
      requestAnimationFrame(tick);
    };
    tick();
  }, [inView, target]);

  return (
    <motion.h3 ref={ref} className={className}>
      {value}
    </motion.h3>
  );
}

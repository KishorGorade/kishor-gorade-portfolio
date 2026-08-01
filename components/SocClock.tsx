"use client";

import { useEffect, useState } from "react";

export default function SocClock() {
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("--");

  useEffect(() => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    const update = () => {
      const now = new Date();
      const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      setTime(`${pad(ist.getHours())}:${pad(ist.getMinutes())}:${pad(ist.getSeconds())}`);
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      setDate(`${days[ist.getDay()]} ${ist.getDate()} ${months[ist.getMonth()]} ${ist.getFullYear()}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-4 hidden flex-col items-end border-l border-white/10 pl-4 font-mono leading-tight lg:flex">
      <span className="text-[0.6rem] tracking-[1.5px] text-text2">SOC TIME (IST)</span>
      <span className="text-shadow-glow text-sm font-semibold tracking-wide text-accent">{time}</span>
      <span className="text-[0.62rem] text-text2">{date}</span>
    </div>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07090D",
        bg2: "#0C0F16",
        card: "#12151D",
        border: "#1E232D",
        graphite: "#161A22",
        navy: "#0E1522",
        primary: "#3B82F6",
        primary2: "#60A5FA",
        accent: "#22D3EE",
        signal: "#F59E0B",
        danger: "#F43F5E",
        text: "#E6E9EF",
        text2: "#8A93A6",
        text3: "#565E70",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(59,130,246,0.25)",
        "glow-cyan": "0 0 24px rgba(34,211,238,0.22)",
        card: "0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "44px 44px" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
        "grid-pan": "grid-pan 6s linear infinite",
        scan: "scan 3.2s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

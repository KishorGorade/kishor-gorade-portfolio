import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        bg2: "#0B1120",
        card: "#111827",
        primary: "#00E5FF",
        accent: "#00FF99",
        warning: "#FACC15",
        danger: "#EF4444",
        text: "#F8FAFC",
        text2: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Poppins", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      animation: {
        blink: "blink 1s infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 1.6s ease-out infinite",
        "gradient-flow": "gradient-flow 5s linear infinite",
        "grid-pan": "grid-pan 20s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(.6)", opacity: "1" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "gradient-flow": { to: { backgroundPosition: "200% center" } },
        "grid-pan": { from: { backgroundPosition: "0 0" }, to: { backgroundPosition: "44px 44px" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-100%)" } },
      },
      boxShadow: {
        glow: "0 0 24px rgba(0,229,255,0.3)",
        "glow-green": "0 0 24px rgba(0,255,153,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fam: {
          950: "#0d0014",
          900: "#1a0533",
          800: "#2d1b69",
          700: "#3b1f7d",
        },
        brand: {
          coral: "#f472b6",
          violet: "#8b5cf6",
          purple: "#a855f7",
          pink: "#ec4899",
          orange: "#f97316",
          emerald: "#10b981",
          yellow: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-mesh": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168,85,247,0.4), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.25), transparent), radial-gradient(ellipse 50% 40% at 10% 60%, rgba(249,115,22,0.15), transparent)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "fade-in":    "fadeIn 0.5s ease both",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      boxShadow: {
        "glass":       "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glow-coral":  "0 0 40px rgba(244,114,182,0.3)",
        "glow-violet": "0 0 40px rgba(139,92,246,0.25)",
        "card-hover":  "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

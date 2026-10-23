import type { Config } from "tailwindcss";

// aibeva.com palette (22 Oct 2026). Site accent for aibfamily.cloud: coral.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070c1a",
        surface: "#0f1830",
        tint: "#111d3a",
        rule: "#1f2c4d",
        ink: "#f3f6fc",
        soft: "#a9b5cc",
        faint: "#75829e",
        primary: "#4d8bff",
        accent: { DEFAULT: "#ff7a6b", soft: "#ffb3a9" },
      },
      fontFamily: {
        sans: ["Segoe UI Variable Text", "Segoe UI Variable Display", "Segoe UI", "system-ui", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

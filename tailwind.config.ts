import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        family: {
          purple: "#7c3aed",
          pink: "#db2777",
          indigo: "#4f46e5",
          soft: "#faf5ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;

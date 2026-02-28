import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
      colors: {
        navy: {
          DEFAULT: "#0C1B4D",
          light: "#1B2E6B",
          dark: "#07112E",
        },
        ivory: {
          DEFAULT: "#F8F7F4",
          dark: "#EEE9E0",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E2C99A",
          dark: "#A8854A",
        },
        muted: "#6B7A99",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

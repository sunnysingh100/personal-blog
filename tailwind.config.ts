import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        inter: ["var(--font-inter)"],
      },
      animation: {
        roll: "roll 24s linear infinite",
      },
      keyframes: {
        roll: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"},
        },
      },
      screens: {
        sxl: "1180px",
        xs: "480px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;

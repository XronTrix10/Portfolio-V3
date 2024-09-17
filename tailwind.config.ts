import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#0C0C0C",
        light: "#EEEDEB",
        "light-gray": "#9B9B9B",
        "dark-gray": "rgb(70, 70, 70)",
        "golden-yellow": "#FEF08A",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        mono: "var(--font-jetbrains)",
        limelight: "var(--font-limelight)",
      },
      cursor: {
        main: "url(/cursor.svg) 15 15, auto",
        btn: "url(/cursor-pointer.svg) 15 15, auto",
      },
      animation: {
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

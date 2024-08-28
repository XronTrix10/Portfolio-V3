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
      },
      fontFamily: {
        inter: "var(--font-inter)",
        mono: "var(--font-jetbrains)",
        limelight: "var(--font-limelight)",
      },
      cursor: {
        custom: "url(/cursor.svg) 15 15, auto",
      },
    },
  },
  plugins: [],
};
export default config;

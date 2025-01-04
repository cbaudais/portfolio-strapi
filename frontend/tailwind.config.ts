import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "berry-10": "#fd0d60",
        "berry-20": "#CF0B4F",
        "berry-60": "#96083A",
        "grey": "#4C454E",        
        "dark": "#241C27",
        "black-100": "#181818",
        "black-90": "#232323",
        "black-80": "#6b6b6b",
        "white-10": "#f0f0f3",
        "white-20": "#dedede",
      },
      fontFamily: {
        handjet: ["Handjet", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        consolas: ["Consolas", "monospace"],
        heading: ["Share Tech", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

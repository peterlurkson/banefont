/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bane: ["BaneDisplaySolid", "sans-serif"],
      },
      colors: {
        black: "#070302",
        diode: "#191D0B",
        green: "#CBFF75",
        orange: "#F98E11",
        b1: "#F7F0E2",
        b2: "#9F9385",
        b3: "#665B55",
        b4: "#3B302E",
      },
    },
  },
  plugins: [],
};

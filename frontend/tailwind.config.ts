import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(27, 141, 218)",
      },
      backgroundImage: {
        moon: "url('/images/moon.svg')",
        glass:
          "radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(105, 59, 147, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)",
        gradient:
          "linear-gradient(150deg, #130428 37.22%, #251043 70.43%, #38126D 97.89%, #261045 132.38%, #190634 150.9%);",

        "night-pattern":
          "url('/images/stars.svg'), linear-gradient(to bottom, #181d23 0%, #202736 80%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;

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
        "bg-dark": "#1C2F25",
        "bg-light": "#2A4236",
        highlight: "#E6A024",
        text: "#FEFAE0",
        "text-dark": "#97A97C",
        "text-light": "#CCD5AE",
      },
    },
  },
  plugins: [],
};
export default config;

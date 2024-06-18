import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container : {
center : true,
padding : '16px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        primary : "#06b6d4",
        secondary : "#22d3ee",
        abu : "#94a3b8",
        dark : "#0f172a"
      },
      screens : {
'2xl' : '1320px'
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: '#0088CC',
        blueLight: '#7FC2E4',
        blueDark: '#262C48',
        green: '#1BB334',
        danger: '#EF3939',
        greyDark01: '#262C48',
        greyDark02: '#525C66',
        greyMedium01: '#828E99',
        greyPale01: '#B8C2CC',
        greyLight01: '#E6E7E8',
        greyLight02: '#F4F6F9',
        greyLight03: '#F5F5F5',
        greyOpaque01: 'rgba(75, 85, 99, 0.6)'
      },
    },
  },
  plugins: [],
};
export default config;

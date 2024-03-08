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
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
      colors: {
        dark: "#0f172a",
        primary: 'rgba(var(--primary-color))',
        secondary: 'rgba(var(--secondary-color))',
        third: 'rgba(var(--third-color))',
        fourth: 'rgba(var(--fourth-color))',
        fifth: 'rgba(var(--fifth-color))',
        extra: 'rgba(var(--foreground-rgb))',
      },
      animation: {
        'spin-slow': 'spin 1s linear',
        'menu-open': 'menu-open 0.5s ease-in-out',
        'menu-close': 'menu-close 0.5s ease-in-out',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'menu-open': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'menu-close': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },

    },
  },
  plugins: [],
};
export default config;

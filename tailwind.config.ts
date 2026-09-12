import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F0E3",
          light: "#FFFAF2",
          dark: "#F0E4D1",
        },
        brown: {
          DEFAULT: "#4B3025",
          dark: "#2E1D17",
          soft: "#745548",
          light: "#8B6F5E",
        },
        tan: {
          DEFAULT: "#D8BCA0",
          light: "#E8D5C0",
          dark: "#C4A682",
        },
        gold: {
          DEFAULT: "#A77A4D",
          light: "#C49A6C",
          muted: "#B89470",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        script: ["var(--font-italianno)", "cursive"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 8vw, 7.2rem)", { lineHeight: "0.85" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.2rem)", { lineHeight: "0.95" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1" }],
      },
      boxShadow: {
        elegant: "0 18px 50px rgba(65, 42, 31, 0.12)",
        card: "0 8px 28px rgba(65, 42, 31, 0.05)",
        subtle: "0 4px 16px rgba(65, 42, 31, 0.08)",
      },
      borderColor: {
        line: "rgba(167, 122, 77, 0.35)",
        "line-light": "rgba(167, 122, 77, 0.18)",
        "line-dark": "rgba(167, 122, 77, 0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config

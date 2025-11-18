/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          gold: "#D4AF37",
          "platinum-grey": "#CFCFCF",
          "deep-black": "#000000",
        },
        fontFamily: {
          display: ["var(--font-anton)", "sans-serif"],
          body: ["var(--font-inter)", "system-ui", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "0rem",
          lg: "0rem",
          xl: "0rem",
          full: "9999px",
        },
        animation: {
          "slow-zoom-in": "slow-zoom-in 8s ease-in-out forwards",
          "gold-dust": "gold-dust 20s linear infinite",
          "micro-glow": "micro-glow 2s infinite ease-in-out",
        },
        keyframes: {
          "slow-zoom-in": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.1)" },
          },
          "gold-dust": {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(-100vh)" },
          },
          "micro-glow": {
            "0%, 100%": {
              filter: "drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))",
            },
            "50%": {
              filter: "drop-shadow(0 0 6px rgba(212, 175, 55, 0.8))",
            },
          },
        },
      },
    },
    plugins: [],
  };
  
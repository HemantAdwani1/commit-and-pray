/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
        },
        secondary: "#06B6D4",
        card: "#F8FAFC",
        "card-dark": "#111827",
        ink: "#111827",
        muted: "#6B7280",
        "muted-dark": "#94A3B8",
        surface: "#FFFFFF",
        "surface-dark": "#0B1120",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(15 23 42 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.04) 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, rgb(148 163 184 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(15 23 42 / 0.06), 0 8px 24px -8px rgb(15 23 42 / 0.08)",
        "soft-lg": "0 8px 30px -8px rgb(15 23 42 / 0.12), 0 24px 60px -20px rgb(15 23 42 / 0.15)",
        glow: "0 0 0 1px rgb(37 99 235 / 0.15), 0 8px 30px -8px rgb(37 99 235 / 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

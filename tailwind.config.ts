// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFF8DC", // Cornsilk for a light honey-like background
        foreground: "#3E2723", // Dark brown for text
        primary: {
          DEFAULT: "#FFEB3B", // Bright yellow
          foreground: "#3E2723", // Dark brown
        },
        secondary: {
          DEFAULT: "#8D6E63", // Medium brown
          foreground: "#FFF8DC", // Cornsilk
        },
        destructive: {
          DEFAULT: "#D84315", // Deep orange
          foreground: "#FFF8DC", // Cornsilk
        },
        muted: {
          DEFAULT: "#F5F5F5", // Light gray
          foreground: "#757575", // Gray
        },
        accent: {
          DEFAULT: "#FF9800", // Orange
          foreground: "#3E2723", // Dark brown
        },
        popover: {
          DEFAULT: "#FFECB3", // Light yellow
          foreground: "#3E2723",
        },
        card: {
          DEFAULT: "#FFF3E0", // Very light orange
          foreground: "#3E2723",
        },
        sidebar: {
          DEFAULT: "#FFCC80", // Light orange
          foreground: "#3E2723",
          primary: "#FFEB3B",
          "primary-foreground": "#3E2723",
          accent: "#FF9800",
          "accent-foreground": "#FFF8DC",
          border: "#FFE0B2",
          ring: "#FFD54F",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(5px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-bottom": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hexagon-background": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.5s ease-out",
        "hexagon-background": "hexagon-background 10s linear infinite",
      },
      backgroundImage: {
        "hex-pattern":
          'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 1 L58 15 L58 45 L30 59 L2 45 L2 15 Z" fill=\'rgba(255, 235, 59, 0.1)\' stroke=\'rgba(141, 110, 99, 0.2)\' stroke-width=\'1\'/%3E%3C/svg%3E\')',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

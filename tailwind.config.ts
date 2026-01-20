import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B46",
        navy: "#0D2A7A",
        sky: "#2F6BFF",
        teal: "#19C6C1",
        violet: "#18A89A",
        sand: "#F5F8FF"
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(12, 22, 43, 0.35)",
        glow: "0 0 40px rgba(76, 201, 240, 0.35)"
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(47, 107, 255, 0.22), transparent 55%), linear-gradient(120deg, rgba(25, 198, 193, 0.14), transparent 40%)",
        "card-glow": "linear-gradient(140deg, rgba(47, 107, 255, 0.16), rgba(24, 168, 154, 0.12))",
        "cta-gradient": "linear-gradient(120deg, #2F6BFF, #19C6C1)"
      }
    }
  },
  plugins: []
};

export default config;

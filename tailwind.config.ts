import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          0: "#FBF9F5",
          1: "#F5F2EC",
          2: "#EBE7DE",
          3: "#DDD7CB",
        },
        ink: {
          0: "#1A1815",
          1: "#2E2A24",
          2: "#5C564C",
          3: "#8A8478",
          4: "#B8B2A4",
        },
        accent: {
          DEFAULT: "#B5563A",
          hover: "#9F4A30",
          press: "#863C26",
          soft: "#F1D9CD",
          softer: "#F8E9E1",
        },
        border: {
          subtle: "#E5E0D6",
          default: "#D5CFC2",
        },
      },
      fontFamily: {
        sans: ['"Geist"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.025em",
        snugger: "-0.015em",
        caps: "0.12em",
      },
      maxWidth: {
        page: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;

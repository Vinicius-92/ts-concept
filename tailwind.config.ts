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
        'ts-gray': "#151515"
      },
      backgroundImage: {
        'main': "url('../../public/main.jpg')",
        'vans': "url('../../public/bg-apollo.jpg')",
        'somos': "url('../../public/somos.png')",
        'marcas': "url('../../public/pneus-bg.jpg')"
      },
      fontFamily: {
        sariaBold: ["SairaCondensed-Bold", "sans-serif"],
        sariaBlack: ["SairaCondensed-Black", "sans-serif"]
      }
    }
  },
  plugins: [],
};
export default config;

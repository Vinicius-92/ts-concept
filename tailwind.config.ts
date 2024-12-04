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
        'ts-gray': "#151515",
        'concept-gray': '#252525',
        'roleta-laranja': '#ff9d00',
        'roleta-amarela': '#ffc800'
      },
      backgroundImage: {
        'main': "url('../../public/main.jpg')",
        'vans': "url('../../public/bg-apollo.jpg')",
        'somos': "url('../../public/somos.png')",
        'marcas': "url('../../public/pneus-bg.jpg')",
        'marcas-concept': "url('../../public/concept/brand-header.webp')",
        'marcas-concept-mob': "url('../../public/concept/marcas-concept-mob.webp')",
        'tire-brands-bg': "url('../../public/concept/tire-brands-bg.webp')",
        'lp-main': "url('../../public/landing-pages/main.png')",
        'lp-aros-main': "url('../../public/landing-pages/aros/main.jpg')",
        'lp-runflat-main': "url('../../public/landing-pages/run-flat/main.png')"
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

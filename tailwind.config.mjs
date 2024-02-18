/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-border-dark":
          "linear-gradient(0deg, rgba(0,8,20,1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 98%, rgba(0,8,20,1) 100%)",
        "gradient-border":
          "linear-gradient(0deg, rgb(255 255 255) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0) 99%, rgb(255 255 255) 100%)",
        "pattern": "url('./src/assets/so-white.png')",
      },
      colors: {
        dark: "#000814",
      },
      colors: {
        "dark": "#000814"
      }
    },
  },
  plugins: [],
};

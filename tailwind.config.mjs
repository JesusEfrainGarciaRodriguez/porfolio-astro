/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-border":
          "linear-gradient(0deg, rgba(0,8,20,1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 98%, rgba(0,8,20,1) 100%)",
      },
    },
  },
  plugins: [],
};

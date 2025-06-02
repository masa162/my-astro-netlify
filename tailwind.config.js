/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",          // 「class」モードにする
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50:  "#fff5f5",
          100: "#ffeaea",
          200: "#ffd4d6",
          300: "#ffc0c3",
          400: "#ff9e9f",
          500: "#ff7d7c",
          600: "#e65d5b",
          700: "#cc4341",
          800: "#a82f2d",
          900: "#831c1a"
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

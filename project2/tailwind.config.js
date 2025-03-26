/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgcolor1:'RGB(251,228,214)',
        bgcolor2:'RGB(38,31,179)',
        headingcolor:'RGB(12,9,80)',
        descriptioncolor:'RGB(22,17,121)',
        boxcolor:'RGB(251,228,214)',
      }
      
    },
  },
  plugins: [],
}
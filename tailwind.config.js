/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        mono: "url('/src/assets/mono.png')" ,
        indigo: "'/src/assets/indigo.png'" ,
        rpwp: "'/src/assets/RPWP.jpg'" ,
      })
    },
  },
  plugins: [],
}
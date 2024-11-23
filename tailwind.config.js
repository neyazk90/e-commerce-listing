/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#745BE7',
        darkenPrimary:'#c11119',
      },
      animation: {
        shimmer: "shimmer 1s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "200px 0" },
        },
      },
    },
  },
  plugins: [],
}


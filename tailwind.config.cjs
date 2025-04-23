/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      translate: {
                '101': '101%',
              },
        
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '70%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
          wave: 'wave 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
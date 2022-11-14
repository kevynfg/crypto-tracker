/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        app: 'url(/lines-bg.png)'
      },
      colors: {
        gray: {
          900: '#121214',
        },
        cyberpunk: {
          cyber100: '#E032E6',
          cyber200: '#B332E6',
          cyber300: '#8632E6',
          cyber400: '#5932E6',
          cyber500: '#020314',
        }
      },
      textColor: {
        cyberpunk: {
          cyber100: '#E032E6',
          cyber200: '#B332E6',
          cyber300: '#8632E6',
          cyber400: '#5932E6',
          cyber500: '#020314',
        }
      }
    },
  },
  plugins: [],
}

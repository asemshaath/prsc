/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A5C82',
        secondary: '#5ABF9D',
        accent: '#FFC857',
        dark: '#1A2A3A',
        light: '#F9FBFD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '15': '3.75rem',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9394C3',
        'primary-dark': '#7678A8',
        'primary-light': '#B5B6D8',
        dark: '#1A1A1A',
        light: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

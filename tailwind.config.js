/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9393C3',
        'primary-dark': '#7678A8',
        'primary-light': '#B5B6D8',
        accent: '#DAA520',
        'accent-light': '#F0D060',
        secondary: '#93C3C0',
        'secondary-dark': '#6FA9A5',
        warm: '#C3B393',
        'warm-light': '#D9CBAF',
        dark: '#1A1A1A',
        light: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

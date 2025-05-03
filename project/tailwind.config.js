/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'slow-spin': 'slow-spin 15s linear infinite',
      },
      keyframes: {
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        brown: {
          50: '#FCF9F5',
          100: '#F5F5DC', // beige
          200: '#E8D9C0',
          300: '#D2B48C', // tan
          400: '#C2A47C',
          500: '#B38B5B',
          600: '#8B5A2B', // primary brown
          700: '#6B4423',
          800: '#3F2305', // dark brown
          900: '#2A1A05',
        },
      },
    },
  },
  plugins: [],
};
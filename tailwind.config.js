/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#09092d',
          800: '#0f0f35',
          700: '#16163d',
          600: '#1d1d45',
          500: '#24244d',
        },
        accent: {
          900: '#8e37a0',
          800: '#a13db3',
          700: '#b444c6',
          600: '#ce4ddb',
          500: '#d766e1',
        },
        dark: {
          900: '#060614',
          800: '#09091f',
          700: '#0c0c2a',
          600: '#0f0f35',
          500: '#121240',
        }
      },
    },
  },
  plugins: [],
};
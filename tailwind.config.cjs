/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: 'hsl(0, 0%, 8%)',
        'medium-grey': 'hsl(0, 0%, 41%)',
        'almost-white': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};

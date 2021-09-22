const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['pages/_document.js','./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fancy: ['Kaisei HarunoUmi'],
        fancy2: ['Share'],
        fancy3: ['Mukta']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

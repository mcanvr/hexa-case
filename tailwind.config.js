/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#FAFAFA',
          500: '#71717A',
          1000: '#09090B',
        },
      },
      fontFamily: {
        extralight: ['Manrope_200ExtraLight'],
        light: ['Manrope_300Light'],
        regular: ['Manrope_400Regular'],
        medium: ['Manrope_500Medium'],
        semibold: ['Manrope_600SemiBold'],
        bold: ['Manrope_700Bold'],
        extrabold: ['Manrope_800ExtraBold'],
      },
    },
  },
  plugins: [],
};

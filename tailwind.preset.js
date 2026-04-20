/**
 * @salesup/ui — Shared Tailwind preset
 * Gebaseerd op salesUp BrandBook 2025
 *
 * Gebruik in elk platform's tailwind.config.js:
 *   const preset = require('@salesup/ui/tailwind.preset');
 *   module.exports = {
 *     presets: [preset],
 *     content: [
 *       './pages/**\/*.{js,jsx,ts,tsx}',
 *       './components/**\/*.{js,jsx,ts,tsx}',
 *       './node_modules/@salesup/ui/components/**\/*.{js,jsx}',
 *     ],
 *   };
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        'up-orange': {
          DEFAULT: '#EF7D00',
          50:  '#FFF4E6',
          100: '#FFE4BF',
          200: '#FFCC80',
          300: '#FFB24D',
          400: '#FF9826',
          500: '#EF7D00',
          600: '#D16C00',
          700: '#B35B00',
          800: '#8A4600',
          900: '#5C2E00',
          dark: '#E62D23',
        },
        'up-blue': {
          DEFAULT: '#193C6C',
          50:  '#E8EDF4',
          100: '#C5D0E2',
          200: '#8FA3C1',
          300: '#5975A0',
          400: '#2F537F',
          500: '#193C6C',
          600: '#15335C',
          700: '#112A4D',
          800: '#0D213E',
          900: '#151E35',
          dark: '#151E35',
        },
        'ghost-white': '#F6F6FC',
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #193C6C 0%, #151E35 100%)',
        'gradient-orange': 'linear-gradient(135deg, #EF7D00 0%, #E62D23 100%)',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(25, 60, 108, 0.08), 0 1px 2px 0 rgba(25, 60, 108, 0.04)',
        'card-hover': '0 4px 12px 0 rgba(25, 60, 108, 0.12), 0 2px 4px 0 rgba(25, 60, 108, 0.06)',
      },
    },
  },
  plugins: [],
};

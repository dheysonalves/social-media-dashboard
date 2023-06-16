/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        toogle: 'rgb(var(--color-toogle) / <alpha-value>)',
        pageBackground: 'rgb(var(--color-background) / <alpha-value>)',
        topBackground: 'rgb(var(--color-top-background) / <alpha-value>)',
        cardBackground: 'rgb(var(--color-card-background) / <alpha-value>)',
        textBlue: 'rgb(var(--color-text-blue) / <alpha-value>)',
        textPattern: 'rgb(var(--color-text-pattern) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

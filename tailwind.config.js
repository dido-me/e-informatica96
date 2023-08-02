/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'inf-primary': '#001f3d',
        'inf-secondary': '#002952',
        'inf-tertiary': '#003D7A',
        'inf-quaternary': '#C9DF43'
      },
      gridTemplateColumns: {
        'auto-fill-20rem': 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))',
        'auto-fill-37rem': 'repeat(auto-fill, minmax(min(100%, 37rem), 1fr))'
      }
    }
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ]
}

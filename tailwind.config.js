/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-20rem': 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))'
      }
    }
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ]
}

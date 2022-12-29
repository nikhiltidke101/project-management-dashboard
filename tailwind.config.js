/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-color': '#23242b',
        'bg-color-2': '#2c3034',
        'bg-color-3':  '#7f7f7f',
        'light-border-color': '#7f7f7f',
        'dark-border-color': '#15161a',
        'text-color-1': '#c0bfc1',
        'text-color-2': '#838383', 
        'purple': '#6c50a0',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    theme: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      }
    }
  },
  plugins: [],
}

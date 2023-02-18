/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    theme: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      fontFamily: {
        'myMain': ['"Open Sans"', 'Arial', 'sans-serif'],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      })
    }
  },
  plugins: [],
}

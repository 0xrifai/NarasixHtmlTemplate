/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
      './dist/plugin/*.js',
      './**/*.html'
    ],
  theme: {
    extend: {
      colors: {
        'charcoal-50': '#fdfdfd',
        'charcoal-100': '#f7f6f8',
        'charcoal-200': '#f9f9f9',
        'charcoal-700': '#353744',
        'charcoal-800': '#272935',
        'charcoal-900': '#353744',
      },
      backgroundImage: {

        'hover-light': 'linear-gradient(to right, #353744 0%, #353744 98%)',
        'hover-dark': 'linear-gradient(to right, #e5e7eb 0%, #e5e7eb 98%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'wysiwyg',
    }),
  ],
}

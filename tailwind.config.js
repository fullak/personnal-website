module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#55e683',
      'secondary': '#d805d8',
      'danger': '#e3342f',
      'white': '#fff',
      'black': '#000000'
    },
    backgroundColor: theme => ({
      'primary': '#55e683',
      'secondary': '#d805d8',
      'danger': '#e3342f',
      'white': '#fff',
      'black': '#000000'
    }),
    borderColor: theme => ({
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#55e683',
      'secondary': '#d805d8',
      'danger': '#e3342f',
      'white': '#fff',
      'black': '#000000'
    })
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [
  ],
}
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#55e683',
      'secondary': '#d805d8',
      'danger': '#e3342f',
      'white': '#fff',
      'black': '#000000',
      'lightGrey': '#e5e6e5'
    },
    backgroundColor: {
      'primary': '#55e683',
      'secondary': '#d805d8',
      'danger': '#e3342f',
      'white': '#fff',
      'black': '#000000',
      'lightGrey': '#e5e6e5'
    },
    borderColor: {
      'primary': '#55e683',
      'secondary': '#d805d8',
      'danger': '#e3342f',
      'white': '#fff',
      'black': '#000000',
      'lightGrey': '#e5e6e5'
    }
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [
  ],
}
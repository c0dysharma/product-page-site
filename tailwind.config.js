/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)',
        moreDarkCyan: '#184131'
      },
      fontFamily:{
        fraunces: ['Fraunces'],
        montserrat: ['Montserrat']
      },
      backgroundImage: {
        'imageMobile': "url('../src/images/image-product-mobile.jpg')",
        'imageDesktop': "url('../src/images/image-product-desktop.jpg')",
      },
      minWidth: {
        '1/2': '300px',
      }
    },
  },
  plugins: [],
}
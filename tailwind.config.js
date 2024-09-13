/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      zIndex: {
        '1000': '1000',
        '500': '500',
        '100': '100',
      },
      paddingLeft: {
        'custom-pl': '18rem',
      },
      marginTop: {
        '10' : '10rem'
      }
    },
  },
  plugins: [],
}

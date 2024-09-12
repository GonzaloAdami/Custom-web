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
    },
  },
  plugins: [],
}

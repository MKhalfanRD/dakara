/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['inter'],
        "circular" : ['Circular STD'] 
      },
      colors: {
        "kuning": '#CC9500',
      }
    },
  },
  plugins: [],
}


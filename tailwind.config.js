/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.js"],
  theme: {
    extend: {
      colors:{
        primary:{
          dark:"#3A3560", 
          light:"#D2DFFF"
        }, 
        secondary:{
          dark:"#838392",
          light:"#F0F4F7"
        }, 
        tertiary:{
          dark:"#EF279B",
          light:"#FFCDEA"
        }
      }, 
      spacing:{
        aside:"calc(16rem + 60%)"
      }
    },
  },
  plugins: [],
}

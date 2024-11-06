/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'clashdisplay': ['font-clashdisplay', 'sans-serif'],        
      },
    },
  },
  plugins: [],
}


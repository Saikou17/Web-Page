/** @type {import('tailwindcss').Config} */
export default {
  //Agregamos los templates que vamos a modificar (.html)
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        //Añadimos un nuevo fontFamily llamado "heading" con una fuente tipografía llamada "Poppins"
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    },
  },
  variant:{
    extend : {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center: true,
      screens : {
        lg: '1200px',
        xl: '1200px',
        '2xl' : '1200px',
      },
    },
    
    extend: {
      fontFamily:{
        manrope:['Manrope' , 'sans-serif'],
        montserrat:['Montserrat' , 'sans-serif']
      },
      colors:{
        mypurple: "#755BB4",
        lightgrey: "hsl(0, 0%, 86%)",
        offblack: "hsl(0, 0%, 8%)",
        colorA: "#333",
        bgInput: "#eee",
        colorBorder: "#ccc",
        toggleColor: "#fff"
      },
      spacing: {
        '160' : '40rem',
        '132' : '33rem',
        '76' : '18.9rem',
        '928' : '928px',
        '900' : '900px',
        '27' : '6.8rem',
        '768' : '768px',
        '120' : '30rem',
        '124' : '124px',
        '18' : '4.5rem',
        '1096' : '1096px',
        '22' : '5.7rem'
      },
      borderRadius: {
        'large': '35%',
        'topLeft' : '150px',
        'bottomLeft' : '100px'
      },
      width: {
        '200%' : '200%'
      },
      translate : {
        '200%' : '200%'
      },
      
    },
  },
  plugins: [],
}


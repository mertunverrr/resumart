/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center: true,
      screen : {
        lg: '1140px',
        xl: '1140px',
        '2xl' : '1140px',
      },
    },
    
    extend: {
      fontFamily:{
        manrope:['Manrope' , 'sans-serif']
      },
      colors:{
        mypurple: "#755BB4",
        lightgrey: "hsl(0, 0%, 86%)",
        offblack: "hsl(0, 0%, 8%)"
      },
      spacing: {
        '160' : '40rem',
        '132' : '33rem',
        '76' : '18.9rem',
        '928' : '928px',
        '900' : '900px',
        '27' : '6.8rem'
      },
      borderRadius: {
        'large': '35%'
      }
    },
  },
  plugins: [],
}


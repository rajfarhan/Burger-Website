/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primarycolor: '#010a%e',
        darkcolor: '#000',
      },
      keyframes: {
        move:{
          "50%": {'transform': 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY':'move 2s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily:{
      oswald:['Oswald','sans-serif'],
      dmsans:['DM Sans','sans-serif']
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable the dark mode variants for background colors
      textColor: ['dark'], // Enable the dark mode variants for text colors
      // Add other variants as needed
    },
  },
  plugins: [],
}


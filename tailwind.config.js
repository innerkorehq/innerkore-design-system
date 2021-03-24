// const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      primary:"#6200ee",
      "primary-variant" :"#3700b3",
      secondary:"#03DAC6",
      'secondary-variant':"#018786",
      back_ground:"#FFFFFF",
      surface:"#FFFFFF",
      error:"#B00020",
      'on-primary':"#FFFFFF",
      'on-secondary':"#000000",
      'on-background':"#000000",
      'on-surface':"#000000",
      'on-error':"#FFFFFF"
     },
    extend: {
    
    },
  },
  variants: {
    backgroundColor:['responsive','hover','focus','active'],
  },
  plugins: []
}


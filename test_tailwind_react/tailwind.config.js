/** @type {import('tailwindcss').Config} */

function withOpacity(variableName){
  return({opacityValue})=>{
    if(opacityValue !== undefined){
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // container:{
    //   center:true,
    //   padding:"2rem",

    // },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      
    },
  
    extend: {
      animation:{
        tilt:'tilt 10s infinite linear'
      },
      keyframes:{
        tilt:{
          '0%,50%,100%':{
            transform:'rotate(0deg)'
          },
          '25%':{
            transform:'rotate(0.5deg)'
          },
          '75%':{
            transform:'rotate(-0.5deg)'
          },
        },
      },
      textColor:{
        skin:{
          base:withOpacity('--color-text-base'),
          muted:withOpacity('--color-text-muted'),
          inverted:withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss",'@tailwindcss/forms',],
};

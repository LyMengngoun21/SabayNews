/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Open Sans','Koulen',],
        'kulen':['Open Sans','Koulen'],
        'Battambang':[ 'Open Sans' , 'Battambang'],
        
      },
      colors: {
        "primary": {
          DEFAULT: '#FA1939',
          '50': '#FECDD4',
          '100': '#FDB9C3',
          '200': '#FD91A0',
          '300': '#FC697E',
          '400': '#FB415B',
          '500': '#FA1939',
          '600': '#D60522',
          '700': '#9F031A',
          '800': '#680211',
          '900': '#320108'
        },
        'flamingo': {
          DEFAULT: '#EF4444',
          '50': '#FDEDED',
          '100': '#FCDADA',
          '200': '#F9B5B5',
          '300': '#F58F8F',
          '400': '#F26A6A',
          '500': '#EF4444',
          '600': '#E71414',
          '700': '#B30F0F',
          '800': '#800B0B',
          '900': '#4C0707'
        },
        'emerald': {
          DEFAULT: '#38C378',
          '50': '#C4EED8',
          '100': '#B5EACD',
          '200': '#95E1B8',
          '300': '#75D7A2',
          '400': '#55CE8D',
          '500': '#38C378',
          '600': '#2B975D',
          '700': '#1F6C42',
          '800': '#124028',
          '900': '#06150D'
        },
      },
    
      container: {
        padding: '2rem',
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1180px'
        },
        
      },
      fontsize:{
        text: '50px',
      },
      
      
      
    },
    

  },

  
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}

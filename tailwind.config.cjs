/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors:{
      gray:{
        DEFAULT: '#121214',
        '100' : '#E1E1E6',
        '200' : '#C4C4CC',
        '600' : '#7C7C8A',
        '800' : '#202024',
        '900' : '#121214',
      },
      cyan:{
        DEFAULT: '#81D8F7',
        '100': '#FFFFFF',
        '200': '#F4FCFE',
        '300': '#CEF0FC',
        '400': '#A7E4F9',
        '500': '#81D8F7',
        '600': '#4CC8F4',
        '700': '#17B7F0',
        '800': '#0C93C3',
        '900': '#096B8F'
      },
      red:{
        DEFAULT: '#D32020',
        '600': '#D32020'
      },
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
    },
    
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
      maxWidth:{
        sm: '22rem'
      },
    },
  },
  plugins: [],
}

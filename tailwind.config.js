/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shark': '#1c2324',
        'metal': '#1D2729',
        'slate': '#3a4a4c',
        'alabaster': '#ede5d8',
        'dune': '#e3daca',
        'dusty': '#c4b9a3',
        'sandstone': '#d9cfbd',
        'mudbrick': '#b5aa94',
        'walnut': '#6C6353',
        'bark': '#5f5646',
      },
      fontSize:{
        'landingPageTitle': '5.5rem',
        'landingPageBioMobile': '0.85rem',
        'xxs':'0.55rem'
      },
      sepia:{
        '75':  '.75'
      }
    },  
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
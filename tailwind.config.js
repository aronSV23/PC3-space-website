/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'SpaceDark': '#0B0D17',
        'SoftViolet': '#D0D6F9'
      },
      fontFamily: {
        'Bellefair': ['Bellefair', 'sans-serif'],
        'BarlowCondensed': ['Barlow Condensed', 'sans-serif'],
        'Barlow': ['Barlow', 'sans-serif']
      },
      screens:{
        'tablet': '1194px'
      },
      backgroundImage:{
        'DestinationBackgound' : 'url(/assets/destination/background-destination-desktop.jpg)',
        'HomeBackgound' : 'url(/assets/home/background-home-desktop.jpg)',
        'CrewBackgound' : 'url(/assets/crew/background-crew-desktop.jpg)',
        'TechnologyBackgound' : 'url(/assets/technology/background-technology-desktop.jpg)'
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
      }
    },
  },
  plugins: [],
}

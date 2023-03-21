/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      Black:'#000000',
      Green: '#00ad00',
      GreenOpacity : '#00ad0058',
      Gray:'#f1f5f9',
      Gray3: '#d1d5db',
      Gray2: '#e5e7eb',
      White: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

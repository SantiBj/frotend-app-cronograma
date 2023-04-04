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
      Gray2: '#e5e7eb',
      Gray3: '#d1d5db',
      Gray4: '#94a3b8',
      Gray6: '#475569',
      White: '#ffffff',
      Red: '#dc2626'
    },
    extend: {},
  },
  plugins: [],
}

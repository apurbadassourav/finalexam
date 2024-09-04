/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'Chivo': ['Chivo', 'sans-seriff'],
      },
      maxWidth: {
        'container': '1410px',
      },
      colors: {
        'white': '#FFFFFF',
        'deep':'#43E7DF',
        'black':'#2C2643',
        'gray':'#645E76',
        'oreng':'#FF7364',
        'blue':'#3639A4'
      },
      backgroundImage: {
        'shape': "url('./src/assets/BGShape.png')",
        'fotter': "url('./src/assets/footer.png')",
        
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/index.html',
    './src/Components/Common/**/*/.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E516E',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif', 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'],
      }, width: {
        fill: '-webkit-fill-available'
      }
    },
  },
  plugins: [],
}


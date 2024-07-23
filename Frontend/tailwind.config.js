/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E516E',
      }
    },
  },
  plugins: [],
}


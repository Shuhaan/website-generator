/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        // custom: ['Poppins', 'sans-serif'],
      },
      colors: {
        // customBgColor: '#FFFAFE',
      },
      width: {
        // 'custom-width': '12rem',
      },
      inset: {
        // 'custom-inset': '6.9rem',
      },
      fontSize: {
        // 'smallFont': '12px',
      },
    },
  },
  plugins: [],
}
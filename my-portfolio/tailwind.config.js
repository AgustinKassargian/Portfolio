/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      boxShadow: {
        '3xl': '0px 5px 150px 0px rgba(0, 0, 0, 0.3)',
      },
      colors:{
        primary: '#6d9ffc',
      },
      fontSize:{
        s: '48px',
        p:'24px'
      }
      
    },
  },
  plugins: [require("daisyui")],
}

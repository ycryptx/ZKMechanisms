/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#B04BFF', // purple
        color2: '#6ECBB3', // green
        color3: '#FF7DB6', // pink,
        color4: '#FF3C00', // orange,
        color5: '##F6ECDC', // off white
        color6: '#685334', // brown
        header: '#E5DCF7',
        color6: '#181818' // dark grey
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  plugins: [require("daisyui")],
}


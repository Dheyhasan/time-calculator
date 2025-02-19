module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
    './node_modules/flowbite/**/*.js' // Add this line
  ],
  darkMode: 'media', // or 'class' or false
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

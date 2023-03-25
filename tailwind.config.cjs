module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/fondobar.jpg')",
        'hero-events': "url('/public/sala-privada.jpg')",
      },
    },
    fontFamily: {
      alkatra: ['Alkatra', 'cursive'],
    },
  },
  plugins: [],
}
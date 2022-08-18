/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html'
    ]
  },
  content: [],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      display: ['Nunito', 'sans-serif'],
      body: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#EA755E',
        secondary: '#BD675F'
      }
    },
  },
  plugins: [

    require('tailwindcss'),
    require('autoprefixer'),

  ],
}

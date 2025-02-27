module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        MainFont: ['Bree Serif'],
      },
      colors: {
        HeaderColor: '#ffb4a4',
      },
      spacing: { '15px': '60px' },
    },
    height: {
      sm: '720px',
      del: '500px',
    },
    width: {
      sm: '200px',
      fe: '130px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

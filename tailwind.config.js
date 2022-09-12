/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  screens: {
    sm: '520px',
    md: '768px',
    lg: '1024px',
    xl: '1220px'
  },
  theme: {
    extend: {
      colors: {
        blue: '#01A0E4',
        grey: '#3C3C3C',
        yellow: '#FFF100',
        golden: '#E4A518',
        lightGrey: '#666666',
        lightGolden: 'rgba(228,165,24,0.57)',
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '1.7rem' }],
        '3xl': ['2.25rem', { lineHeight: '1.7rem' }],
      },
      width: {
        '32': '8.25rem',
        '20': '5.25rem',
      },
      height: {
        '24': '5.8rem',
        '16': '3.8rem',
      },
      fontFamily: {
        'mont': ['Montserrat'],
      },
      dropShadow: {
        DEFAULT: '0px 11px 22px rgba(0, 0, 0, 0.08)',
      },
      boxShadow: {
        DEFAULT: '3px 5px 27px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        'footer': "url('/src/assets/images/footer-bg.png')",
      },
      textDecorationThickness: {
        3: '3px',
      },
      textUnderlineOffset: {
        2: '2px',
        18: '18px',
      },
    },
  },
  plugins: [],
}
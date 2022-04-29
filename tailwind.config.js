module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary-orange': '#EF7D3F',
      'primary-navy': '#141630',
      'primary-blue-light': '#1F2350',
      'primary-gray': '#141632',
      'secondary-white': 'rgba(255,255,255,0.8)',
      'secondary-white-transparent': 'rgba(20,22,48,0.05)',
      'tertiary-white': '#393C58',
      'vivid-orange': '#E15B11',
      'bright-orange': '#EB9845',
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '1': '8px',
        '2': '10px',
        '3': '12px',
        '4': '16px',
        '5': '29px',
        '6': '32px',
        '7': '48px',
        '88': '54px',
        '9': '87px',
        '71': '41px',
        '111': '63px',
        '140': '280px',
        '150': '385px',
        '160': '447px',
        '165': '450px',
        '8': '9.813rem',
        '123' : '9.681rem',
        '128': '12.3125rem',
        '200': '2.4375rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        '1md': '1rem',
        'sm': ['12px', {
          letterSpacing: '0',
          lineHeight: '14px',
        }],
        '2md': ['14px', {
          letterSpacing: '0',
          lineHeight: '16px',
          align: 'center',
        }],
        '3md': ['12px', {
          letterSpacing: 'normal',
          lineHeight: '16px',
        }],
        '9md': ['14px', {
          letterSpacing: '0',
          lineHeight: '16px',
        }],
        '4md': ['16px', {
          letterSpacing: 'normal',
          lineHeight: '19px',
          align: 'left',
        }],
        '5md': ['22px', {
          letterSpacing: 'normal',
          lineHeight: '27px',
          align: 'left',
        }],
        '6md': ['18px', {
          letterSpacing: 'normal',
          lineHeight: '21px',
          align: 'left',
        }],
        '1lg': ['22px', {
          letterSpacing: 'normal',
          lineHeight: '25px',
          align: 'left',
        }],
        '1xl': ['20px', {
          letterSpacing: '0',
          lineHeight: '24px',
        }],
        '2xl': ['28px', {
          letterSpacing: '0',
          lineHeight: '33px',
        }],
        '3xl': ['32px', {
          letterSpacing: '-0.02em',
          lineHeight: '40px',
        }],
        '4xl': ['52px', {
          letterSpacing: 'normal',
          lineHeight: '63px',
          align: 'left',
        }],
      },

    }
  },
}

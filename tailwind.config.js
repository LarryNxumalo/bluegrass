module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary-orange': '#EF7D3F',
      'primary-navy': '#141630',
      'primary-blue-light': '#1F2350',
      'secondary-white': 'rgba(255,255,255,0.8)',
      'secondary-white-transparent': 'rgba(20,22,48,0.05)',
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
        '8': '9.813rem',
        '128': '12.3125rem',
        '200': '2.4375rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        '1md': '1rem',
        '2md': ['14px', {
          letterSpacing: '0',
          lineHeight: '16px',
          align: 'center',
        }],
        '3md': ['12px', {
          letterSpacing: 'normal',
          lineHeight: '16px',
        }],
        '1xl': ['20px', {
          letterSpacing: '0',
          lineHeight: '24px',
        }],
        '2xl': ['28px', {
          letterSpacing: '0',
          lineHeight: '33px',
        }],
        // Or with a default line-height as well
        '3xl': ['32px', {
          letterSpacing: '-0.02em',
          lineHeight: '40px',
        }],
      },

    }
  },
}

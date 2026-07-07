const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
    // Directs Tailwind exactly where your Statiq content files live
    content: [
      "../chandu-cc/input/**/*.{html,cshtml,md,razor}",
      "../chandu-cc/theme/**/*.{html,cshtml,md,razor}"
    ],
    theme: {
      extend: {
        // ADD THIS BLOCK RIGHT HERE
        fontFamily: {
          display: ['"Iosevka Etoile"', ...defaultTheme.fontFamily.sans],
          // If you want it as your main body font instead, change 'display' to 'sans'
        },
        textColor: {
          'gradient': 'transparent',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              // 1. ALL HEADERS IN THE BLOG
              h1: { fontFamily: '"Iosevka Etoile", monospace' },
              h2: { fontFamily: '"Iosevka Etoile", monospace' },
              h3: { fontFamily: '"Iosevka Etoile", monospace' },
              h4: { fontFamily: '"Iosevka Etoile", monospace' },
              h5: { fontFamily: '"Iosevka Etoile", monospace' },
              h6: { fontFamily: '"Iosevka Etoile", monospace' },

              // 1. UPDATED BLOG BODY TEXT TO 12px
              p: {
                fontFamily: '"Iosevka Etoile", monospace',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '1.6',
                letterSpacing: '-0.01em',
              },
              li: {
                fontFamily: '"Iosevka Etoile", monospace',
                fontSize: '12px',
                fontWeight: '400',
              },
              a: {
                fontFamily: '"Iosevka Etoile", monospace',
              },

             // 1. LIGHT MODE COLORS (For standard white background layouts)
              em: {
                color: '#0ea5e9',       // Sky Blue 500
                fontStyle: 'italic',
              },
              strong: {
                color: '#f43f5e',       // Rose Red 500
                fontWeight: '700',
              },

              // 2. DARK MODE OVERRIDES (Optimized for dark:bg-slate-700 background contrast)
              '.dark & em, .dark em': {
                color: '#7dd3fc !important',       // Soft Sky-300 (High contrast on slate-700)
              },
              '.dark & strong, .dark strong': {
                color: '#fda4af !important',       // Soft Rose-300 (High contrast on slate-700)
              },
              // 2. UPDATED CODE BLOCKS TO MATCH 12px
              code: {
                fontFamily: '"Iosevka", monospace',
                fontSize: '12px',
                '&::before': { content: '"" !important' },
                '&::after': { content: '"" !important' }
              },
              pre: {
                fontFamily: '"Iosevka", monospace',
                fontSize: '12px',
              },
              'pre code': {
                fontFamily: '"Iosevka", monospace',
                fontSize: '12px',
              },
              code: {
                '&::before': {
                  content: '"" !important'
                },
                '&::after': {
                  content: '"" !important'
                }
              }
            }
          }
        }),
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // 3. THIS CORE UTILITY SETS THE REST OF THE WEBSITE (NAV, SIDEBAR) TO 12px
      function({ addBase }) {
        addBase({
          'body': { fontSize: '12px' },
        })
      },
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('tailwindcss-motion'),
      require('@tailwindcss/line-clamp')
    ],
  }
  
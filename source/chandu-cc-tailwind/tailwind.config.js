const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
    content: ["../**/*.{html,cshtml,md,razor}"],
    theme: {
      extend: {
        typography: (theme) => ({
          DEFAULT: {
            css: {
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
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  
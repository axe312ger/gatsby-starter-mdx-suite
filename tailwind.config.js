const plugin = require('tailwindcss/plugin')

const merge = require('deepmerge')
const defaultTheme = require('gatsby-theme-mdx-suite-base/tailwind.config.js')
const defaultTailwindTheme = require('gatsby-theme-mdx-suite-core/src/tailwind.default.config')

// Extend default theme
const config = merge(defaultTheme, {
  theme: {
    extend: {
      spacing: {
        'grid-gap': defaultTailwindTheme.spacing['8'],
        'content-gap': defaultTailwindTheme.spacing['8'],
        'content-column': '1280px',
      },
      colors: {
        background: 'transparent',
        'root-background': 'white',
        primary: '##c0ffee',
        sets: {
          'my-special-color-set': {
            background: '#bada55',
          },
        },
      },
    },
  },
  plugins: [
    // Overwrite global html elements
    plugin(function ({ addBase, config }) {
      addBase({
        h1: {
          fontWeight: config('theme.fontWeight.light'),
          letterSpacing: '-2px',
        },
        h2: {
          fontWeight: config('theme.fontWeight.light'),
          letterSpacing: '-2px',
        },
        h3: {
          fontWeight: config('theme.fontWeight.light'),
          letterSpacing: '-2px',
        },
        h4: {
          fontWeight: config('theme.fontWeight.light'),
          letterSpacing: '-1px',
        },
        h5: {
          fontWeight: config('theme.fontWeight.light'),
          letterSpacing: '-1px',
        },
        h6: {
          fontWeight: config('theme.fontWeight.light'),
          letterSpacing: '-1px',
        },
      })
    }),
  ],
})

// Overwrite config values
config.theme.extend.fontFamily.headline = [
  'Montserrat',
  ...defaultTailwindTheme.fontFamily.sans,
]
config.theme.extend.fontFamily.body = [
  'Inter',
  ...defaultTailwindTheme.fontFamily.sans,
]

module.exports = config

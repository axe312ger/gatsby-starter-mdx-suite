const themeConfig = require('./tailwind.config')

const isProduction = process.env.NODE_ENV === 'production'

// Duplicate and rename .env.example to .env and fill in your credentials
require('dotenv').config({ path: `.env` })

const translationsEn = require('./translations/en')
const translationsDe = require('./translations/de')

module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `Gatsby MDX Suite Starter`,
    description: `Gatsby MDX Suite starter`,
    siteUrl: `https://axe312ger.github.io/gatsby-starter-mdx-suite`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-mdx-suite-core`,
      options: {
        // Configure the MDX Suite
        themeConfig,
        /**
         * Internationalisation
         */
        langs: ['en-US', 'de'],
        // Map locales to path prefixes
        localeMap: {
          'en-US': '',
          de: 'de',
        },
        // Will be passes as resources to i18next.
        // See https://www.i18next.com/overview/configuration-options
        translations: {
          'en-US': translationsEn,
          de: translationsDe,
        },
      },
    },
    // Basic layout, SEO, Analytics and more
    {
      resolve: `gatsby-theme-mdx-suite-base`,
      // options: {}
    },
    // Recommended plugins
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Inter`,
              subsets: [`latin`],
              variants: [`400`, `700`],
            },
            {
              family: `Montserrat`,
              subsets: [`latin`],
              variants: [`300`],
            },
          ],
        },
      },
    },
    // Project specific configuration
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby MDX Suite Starter`,
        short_name: `mdx full`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `./src/assets/icon.svg`,
      },
    },
    `gatsby-transformer-video`,
    ...(isProduction
      ? [
          `gatsby-plugin-offline`,
          // Enable if you build on Netlify. Gatsby cloud users do not need this.
          // {
          //   resolve: 'gatsby-plugin-netlify-cache',
          //   options: {
          //     extraDirsToCache: [
          //       join('node_modules', '.cache', 'gatsby-transformer-video'),
          //       join('node_modules', '.cache', 'gatsby-transformer-video-bin'),
          //     ],
          //   },
          // },
        ]
      : []),
  ].filter(Boolean),
}

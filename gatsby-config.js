const { join } = require('path')

const isProduction = process.env.NODE_ENV === 'production'

require('dotenv').config({ path: `.env` })

module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `Gatsby MDX Suite`,
    description: `Get started with MDX & Contentful`,
    siteUrl: `https://axe312ger.github.io/gatsby-starter-mdx-suite`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-mdx-suite`,
      options: {
        // List your supported locales
        langs: ['en-US', 'de'],
        defaultLocale: 'en-US',
        // This maps locales to path prefixes
        localeMap: {
          'en-US': '',
          de: 'de',
        },
        /**
         * Disabling i18n:
         * 1. Use a single locale in "langs" array config: ['en']
         * 2. Map it in localeMap to an empty string: { en: '' }
         */
        // This maps content types to path prefixes.
        pageTypeMap: {
          page: null,
          blogPost: 'blog',
        },
        // These will be passed to i18next.
        // You may consider haveing these in a seperate json file and import it.
        translations: {
          'en-US': {
            translation: {
              copyright: '© Copyright {{year}}. All rights reserved.',
              newsReadMore: 'Read more...',
              newsTimeToRead: '{{minutes}} min. to read',
            },
          },
          de: {
            translation: {
              copyright: '© Copyright {{year}}. Alle Rechte vorbehalten.',
              newsReadMore: 'Weiterlesen...',
              newsTimeToRead: '{{minutes}} Min. Lesezeit',
            },
          },
        },
        /**
         * Configuration for automatic media usage detection within your MDX content.
         *
         * Keep this in sync with your enabled MDX components.
         *
         * This configures the media field for all mdx fields
         * For each collection the raw mdx source will be searched for media assets
         * Components are located via an query selector the id extracted from a given attribute
         * Each found media asset will be added as reference, grouped by the given collection name
         *
         * Why?
         *
         * This allows you to generate different image presets with Gatsby:
         * * Editors can freely add images to the content
         * * No extra reference field is need to locate used images
         * * You can even select nested components when rendering more complex content.
         */
        mediaCollections: {
          background: {
            selector: [
              'Section[backgroundImageId]',
              'Viewport[backgroundImageId]',
              'Header[backgroundImageId]',
            ].join(','),
            attribute: 'backgroundImageId',
          },
          images: {
            selector: [
              'Image[id]',
              'Box[backgroundImageId]',
              'BoxCarouselSlide[backgroundImageId]',
              'Card[imageId]',
            ].join(','),
            /**
             * @param el See: https://github.com/cheeriojs/cheerio#the-dom-node-object
             */
            attribute: (el) => {
              switch (el.name) {
                case 'box':
                case 'boxcarouselslide':
                  return 'backgroundImageId'
                case 'card':
                  return 'imageId'
                default:
                  return 'id'
              }
            },
          },
          floating: {
            selector: 'FloatingImage[imageId]',
            attribute: 'imageId',
          },
          videos: {
            selector: ['Video[id]', 'BoxVideo[videoId]'].join(','),
            attribute: (el) => (el.name === 'video' ? 'id' : 'videoId'),
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby MDX Suite`,
        short_name: `mdx`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/icon.svg`,
      },
    },
    // Duplicate and rename .env.example to .env and fill in your credentials
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || `cdn.contentful.com`,
      },
    },
    `gatsby-transformer-video`,
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    ...(isProduction
      ? [
          `gatsby-plugin-offline`,
          {
            resolve: 'gatsby-plugin-netlify-cache',
            options: {
              extraDirsToCache: [
                join('node_modules', '.cache', 'gatsby-transformer-video'),
                join('node_modules', '.cache', 'gatsby-transformer-video-bin'),
              ],
            },
          },
        ]
      : []),
  ].filter(Boolean),
}

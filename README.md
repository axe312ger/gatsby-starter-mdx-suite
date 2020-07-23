# Gatsby MDX Suite Starter

@todo update me!

## Prerequisites

The following software is required to install and run this starter:

* Node v10+: https://www.gatsbyjs.org/docs/upgrading-node-js/
* FFMPEG: https://www.gatsbyjs.org/packages/gatsby-transformer-video/#prerequisites
* [Contentful CLI](https://github.com/contentful/contentful-cli) & [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/): `npm i -g contentful-cli gatsby-cli`
* Login to Contentful: `contentful login`

## Setup

1. Create new page:
   * `gatsby new PROJECTNAME https://github.com/axe312ger/gatsby-starter-mdx-suite.git`
1. Create new Contentful space or use existing:
   * Create new: `contentful space create --name "Gatsby MDX Suite"`
   * Select your fresh space: `contentful space use`
2. Run migration for desired content models (page, menuitem, blog)
   * Import Menu Data Model: `contentful space migration node_modules/gatsby-theme-mdx-suite-core/contentful/contentful-migration-menu.js -y`
   * Import Page Data Model: `contentful space migration node_modules/gatsby-theme-mdx-suite-core/contentful/contentful-migration-page.js -y`
3. Import demo content
   * `contentful space import --content-file node_modules/gatsby-theme-mdx-suite-core/contentful/example-content-pages-menu-assets.json`
4. Connect Gatsby to Contentful API:
   * Create new access token: `contentful space accesstoken create --name "Gatsby MDX Suite"`
   * Get space id: See output of creation above or see `contentful space list`
   * Add access token & sace id to env variables: `cp .env.example .env && code .env`
5. Lets go: `npm run develop`


## Extend

1. Install blog theme: `yarn add gatsby-theme-mdx-suite-blog`
2. Import Blog Data Model:
   * `contentful space migration node_modules/gatsby-theme-mdx-suite-blog/contentful/contentful-migration-blog.js -y`
3. Import blog demo content:
   * `contentful space import --content-file node_modules/gatsby-theme-mdx-suite-blog/contentful/example-content-blog.json`
4. Add `gatsby-theme-mdx-suite-blog` as plugin to `gatsby-config.js`
5. Navigate to `/blog` to test it
6. Add new menu item linking to `/blog`

## Development

* Set theme-ui config:
  *  Adjust your theme config here: `code ./src/gatsby-plugin-theme-ui/index.js`
  *  Reference: https://github.com/axe312ger/gatsby-mdx-suite/blob/master/gatsby-theme-mdx-suite/src/gatsby-plugin-theme-ui/index.js
* Add/remove MDX components: `code ./src/gatsby-plugin-theme-ui/components.js`
* The rest is pretty much the usual Gatsby workflow. Create pages/templates as you are used to.


## Deployment

### Netlify

1. Create new site via project repository.
2. Make sure to add environment variables from `.env` file

### Gatsby Cloud

1. Just add it. Connect to Contentful & Netlify via the UI. It just works :)

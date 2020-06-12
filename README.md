# Gatsby MDX Suite Starter

## Prerequisites

The following software is required to install and run this starter:

* Node v10+: https://www.gatsbyjs.org/docs/upgrading-node-js/
* FFMPEG: https://www.gatsbyjs.org/packages/gatsby-transformer-video/#prerequisites

## Setup

1. Create new page: `gatsby new PROJECTNAME https://github.com/axe312ger/gatsby-starter-mdx-suite.git`
2. Get and use [contentful-cli](https://www.contentful.com/developers/docs/tutorials/cli/installation/)
   * Login: `contentful login`
3. Create new Contentful space or use existing:
   * Create new: `contentful space create --name "Gatsby MDX Suite"`
   * Select your fresh space: `contentful space use`
5. Run migration for desired content models (page, menuitem, blog)
   * Import Menu Data Model: `contentful space migration contentful/contentful-migration-menu.js -y`
   * Import Page Data Model: `contentful space migration contentful/contentful-migration-page.js -y`
   * Import Blog Data Model: `contentful space migration contentful/contentful-migration-blog.js -y`
6. Import demo content
   * `contentful space import --content-file contentful/demo-content.json`
7. Connect Gatsby to Contentful API:
   * Create new access token: `contentful space accesstoken create --name "Gatsby MDX Suite"`
   * Get space id: See output of creation above or see `contentful space list`
   * Add access token & sace id to env variables: `cp .env.example .env && code .env`
8. Lets go: `npm run develop`


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

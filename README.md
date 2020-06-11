# Gatsby MDX Suite Starter


## Setup

1. Create new page: `gatsby new PROJECTNAME https://github.com/axe312ger/gatsby-starter-mdx-suite.git`
2. Contentful create new empty space https://app.contentful.com/
3. Get and use [contentful-cli](https://www.contentful.com/developers/docs/tutorials/cli/installation/)
   * Login: `contentful login`
   * Select your fresh space: `contentful space use`
4. Run migration for desired content models (page, menuitem, blog)
   * Import Menu Data Model: `contentful space migration contentful/contentful-migration-menu.js -y`
   * Import Page Data Model: `contentful space migration contentful/contentful-migration-page.js -y`
   * Import Blog Data Model: `contentful space migration contentful/contentful-migration-blog.js -y`
5. Optional: import demo content
   * `contentful space import --content-file contentful/demo-content.json`
6. Connect Gatsby to Contentful API:
   * Create new access token: `contentful space accesstoken create --name "Gatsby MDX Suite"`
   * Get space id: See output of creation above or see `contentful space list`
   * Add access token & sace id to env variables: `cp .env.example .env && code .env`
7. Lets go: `npm run develop`


## Use it

* Set theme-ui config:
  *  Adjust your theme config here: `code ./src/gatsby-plugin-theme-ui/index.js`
  *  Reference: https://github.com/axe312ger/gatsby-mdx-suite/blob/master/gatsby-theme-mdx-suite/src/gatsby-plugin-theme-ui/index.js
* Add/remove MDX components: `code ./src/gatsby-plugin-theme-ui/components.js`
* The rest is pretty much the usual Gatsby workflow. Create pages/templates as you are used to.

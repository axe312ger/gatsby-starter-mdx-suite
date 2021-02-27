require('dotenv').config({ path: `.env` })

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

require('@applitools/eyes-cypress')(module)
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('savePrivacyManager', () => {
  cy.get('body').should('contain', 'This website stores data such as cookies')
  cy.get('main').should('not.be.empty')

  // @todo this wait should not be needed, but we can't be sure when privacy manager prototype is visible, at least in the current version
  cy.wait(2000)

  cy.get('button').contains('save').click()

  cy.get('body').should(
    'not.contain',
    'This website stores data such as cookies'
  )
})

/**
 * Prepares page DOM properly by triggering lazy loading elements
 * Then sending it to Applitools eyes to compare it via AI with baseline
 */
Cypress.Commands.add('eyesScreenshot', (name) => {
  cy.scrollTo('bottom', { duration: 2000 })
  cy.wait(1000)
  cy.eyesCheckWindow(name)
})

const PRIVACY_MANAGER_TEXT =
  'This website stores data such as cookies to enable necessary site functionality, anonymous analytics, and embedding of external services for videos, maps and more. You may change your settings at any time.'

describe('Privacy Manager', { retries: 2 }, () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker
      },
    })
  })

  it('closes privacy manager on save', () => {
    cy.savePrivacyManager()
    cy.get('body').should('not.contain', PRIVACY_MANAGER_TEXT)
  })

  it('keeps privacy manager closed after saving', () => {
    cy.get('body').should('contain', PRIVACY_MANAGER_TEXT)
    cy.savePrivacyManager()
    cy.get('body').should('not.contain', PRIVACY_MANAGER_TEXT)
    cy.reload()
    cy.get('main').should('contain', 'Done! You are ready!')
    cy.get('body').should('not.contain', PRIVACY_MANAGER_TEXT)
  })
})

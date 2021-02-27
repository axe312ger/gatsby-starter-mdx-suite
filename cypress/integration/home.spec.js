describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.savePrivacyManager()
  })

  it('successfully loads', () => {
    cy.get('main').should('contain', 'Done! You are ready!')
  })

  if (Cypress.env('TEST_VISUAL_REGRESSIONS')) {
    it('looks as expected', () => {
      cy.eyesOpen({ testName: 'Home' })
      cy.eyesScreenshot('Home')
      cy.eyesClose()
    })
  }
})

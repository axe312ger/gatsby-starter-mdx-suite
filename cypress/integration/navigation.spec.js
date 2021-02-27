describe('Header navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.savePrivacyManager()
  })

  it('directs user to desired route on click', () => {
    cy.get('main').should('contain', 'Done! You are ready!')

    cy.get('main a').contains('About us').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/about-us')
    })

    cy.get('main').should('contain', 'This is the second page of this project.')
  })
})

describe('Footer navigation', () => {
  beforeEach(() => {
    cy.visit('/about-us')
  })

  it('directs user back home on click', () => {
    cy.get('main').should('contain', 'This is the second page of this project.')

    cy.get('footer').contains('Home').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })

    cy.get('main').should('contain', 'Done! You are ready!')
  })
})

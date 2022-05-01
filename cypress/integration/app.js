/* global cy */

describe('Pokdex', () => {
  it('Front page can be opened', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('pikachu')
  })
})
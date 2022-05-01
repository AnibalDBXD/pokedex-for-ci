/* global cy */

describe('Pokdex', () => {
  it('Front page can be opened', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('pikachu')
  })
})
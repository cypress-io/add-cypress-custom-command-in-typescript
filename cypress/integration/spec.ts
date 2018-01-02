it('works', () => {
  expect(Cypress.version).to.be.a('string')
})

it('has new command foo', () => {
  cy.foo().should('equal', 'foo')
})

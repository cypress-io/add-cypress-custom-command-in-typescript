it('works', () => {
  expect(Cypress.version).to.be.a('string')
})

it('has new command foo', () => {
  cy.foo().should('equal', 'foo')
})

it('has new command foo2 that uses foo', () => {
  cy.foo2().should('equal', 'foo')
})

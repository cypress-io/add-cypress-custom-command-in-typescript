it('works', () => {
  expect(Cypress.version).to.be.a('string')
})

it('has new command foo', () => {
  cy.foo().should('equal', 'foo')
})

it('has new command foo2 that uses foo', () => {
  cy.foo2().should('equal', 'foo')
})

it('can sum two numbers', () =>{
  cy.sum(2, 3).should('equal', 5)
})

it('can print greeting to the console', () => {
  cy.greeting({ greeting: 'Hello', name: 'Friend' })
  // or use defaults
  cy.greeting()
})

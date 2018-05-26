;(() => {
  // try to have name constant in test as in commands.ts
  const _ = Cypress._
  const label = 'Cypress-command'
  console.log('name in commands is', label)

  it('works', () => {
    expect(Cypress.version).to.be.a('string')
  })

  it('has new command foo', () => {
    cy.foo().should('equal', 'foo')
  })

  it('has new command foo2 that uses foo', () => {
    cy.foo2().should('equal', 'foo')
  })
})()

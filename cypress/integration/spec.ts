it('works', () => {
  expect(Cypress.version).to.be.a('string')
})

it('has new command foo', () => {
  expect(cy.foo()).to.equal('foo')
})

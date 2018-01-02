/**
 * An example function "foo()"
 *
 * @returns {string} "foo"
 * @example
 *    cy.foo() // yields "foo"
 */
function foo() {
  return 'foo'
}
Cypress.Commands.add('foo', foo)

declare namespace Cypress {
  interface Chainable {
    /**
     * Returns "foo"
     *
     * @returns {typeof foo}
     * @memberof Chainable
     * @example
     *    cy.foo() // "foo"
     */
    foo(): typeof foo
  }
}

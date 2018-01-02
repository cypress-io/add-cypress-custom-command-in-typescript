/**
 * An example function "foo()"
 *
 * @returns {string} "foo"
 * @example
 *    foo() // "foo"
 */
function foo() {
  return 'foo'
}

// add command "cy.foo()"
Cypress.Commands.add('foo', foo)

// add new command to the existing Cypress interface
declare namespace Cypress {
  interface Chainable {
    /**
     * Yields "foo"
     *
     * @returns {typeof foo}
     * @memberof Chainable
     * @example
     *    cy.foo().then(f =. ...) // f is "foo"
     */
    foo(): typeof foo
  }
}

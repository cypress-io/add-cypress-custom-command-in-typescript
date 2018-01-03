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

/**
 * Uses cy.foo() internally
 *
 * @returns
 */
function foo2() {
  return cy.foo()
}

// add command "cy.foo()"
Cypress.Commands.add('foo', foo)
Cypress.Commands.add('foo2', foo2)

// add new command to the existing Cypress interface
declare namespace Cypress {
  interface Chainable {
    /**
     * Yields "foo"
     *
     * @returns {typeof foo}
     * @memberof Chainable
     * @example
     *    cy.foo().then(f = ...) // f is "foo"
     */
    foo(): typeof foo
    foo2(): typeof foo2
  }
}

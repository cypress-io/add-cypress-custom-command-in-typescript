// add new command to the existing Cypress interface
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Yields "foo"
       *
       * @returns {typeof foo}
       * @memberof Chainable
       * @example
       *    cy.foo().then(f = ...) // f is "foo"
       */
      foo: typeof foo
      foo2: typeof foo2
      sum: (a: number, b: number) => Chainable<number>
    }
  }
}

  /**
 * An example function "foo()"
 *
 * @returns {string} "foo"
 * @example
 *    foo() // "foo"
 */
export function foo() {
  return 'foo'
}

/**
 * Uses another custom command `cy.foo()` internally.
 *
 * @returns {string} "foo"
 * @example cy.foo() // "foo"
 */
export function foo2() {
  return cy.foo()
}

/**
 * Adds two numbers
 * @example sum(2, 3) // 5
*/
export function sum(a: number, b: number): number {
  return a + b
}

// add commands to Cypress like "cy.foo()" and "cy.foo2()"
Cypress.Commands.add('foo', foo)
Cypress.Commands.add('foo2', foo2)
Cypress.Commands.add('sum', sum)

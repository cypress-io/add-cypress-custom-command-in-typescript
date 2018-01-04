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
 * Uses cy.foo() internally
 *
 * @returns
 */
export function foo2() {
  return cy.foo()
}
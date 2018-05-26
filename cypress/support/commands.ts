// importing into the TS module that merged module interface does not work
// https://github.com/cypress-io/add-cypress-custom-command-in-typescript/issues/2
// import {foo, foo2} from './actions'
// but requiring in CommonJS style works
;(() => {
  // import { foo, foo2 } from './actions';
  const {foo, foo2} = require('./actions')
  const _ = Cypress._

  // add commands to Cypress like "cy.foo()" and "cy.foo2()"
  Cypress.Commands.add('foo', foo)
  Cypress.Commands.add('foo2', foo2)

  // unrelated constant - does it conflict with a constant with same name
  // in your tests?
  const label = 'Cypress-command'
  console.log('name in commands is', label)
})()

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
    foo: () => string
    foo2: () => string
  }
}

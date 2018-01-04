[![Build Status](https://travis-ci.org/cypress-io/add-cypress-custom-command-in-typescript.svg?branch=master)](https://travis-ci.org/cypress-io/add-cypress-custom-command-in-typescript)

* install typescript compiler v2.6.2
* install Cypress v1.4.1
* open Cypress once to scaffold tests
* rename [cypress/integration/spec.ts](cypress/integration/spec.ts)
* created `tsconfig.json` file

```json
{
  "include": [
    "node_modules/cypress",
    "cypress/*/*.ts"
  ]
}
```

* inside [cypress/support/commands.ts](cypress/support/commands.ts) create new function `foo`

```ts
function foo() {
  return 'foo'
}
```

* then add this function Cypress commands

```ts
Cypress.Commands.add('foo', foo)
```

* and add to Cypress TS chainer interface

```ts
declare namespace Cypress {
  interface Chainable {
    /**
     * Yields "foo"
     *
     * @returns {typeof foo}
     * @memberof Chainable
     * @example
     *    cy.foo().then(f => ...) // f is "foo"
     */
    foo(): typeof foo
  }
}
```

* use this in the test [cypress/integration/spec.ts](cypress/integration/spec.ts)

```ts
it('has new command foo', () => {
  cy.foo().should('equal', 'foo')
})
```

* add TypeScript preprocessor to Cypress using `npm i -D @bahmutov/add-typescript-to-cypress` v 1.1.1

* run Cypress to make sure the test passes

![test](images/cy-foo-works.png)

* VSCode IntelliSense correctly shows `cy.foo()` docs

![IntelliSense](images/cy-foo-intellisense.png)



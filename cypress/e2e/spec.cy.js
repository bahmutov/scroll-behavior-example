/// <reference types="cypress" />

it('types into the input field', // { scrollBehavior: 'center' },
() => {
  cy.visit('index.html')
  cy.get('#name').type('world')
  cy.contains('#greeting', 'Hello, world!').should('be.visible')
})

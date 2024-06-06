/// <reference types="cypress" />

it(
  'types into the input field',
  {
    // apply scroll behavior to the entire test
    // you can also specify the scroll behavior
    // as an option to the cy.type command
    scrollBehavior: false,
  },
  () => {
    cy.visit('index.html')
    cy.get('#name').type('world')
    cy.contains('#greeting', 'world').should('be.visible')
  },
)

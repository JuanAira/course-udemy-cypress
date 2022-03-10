/// <reference types='Cypress' />

require('cypress-plugin-tab')

describe('Firts Reto', () => {
  it('Demo', () => {
    cy.visit('https://demoqa.com/webtables');
    cy.title().should('eq', 'ToolsQA');

    cy.get('#searchBox').should('be.visible').type('Cierra');
    cy.get('#searchBox').should('be.visible').clear();

    //add
    cy.get('#addNewRecordButton').should('be.visible').click();
    cy.get('#firstName').should('be.visible').type('Juanga').tab().
      type('Aira').tab().
      type('juanaira146@gmail.com').tab().type('35').tab().type('30000').tab().type('Sistemas');
    cy.get('#submit').should('be.visible').click();

    cy.get('#searchBox').should('be.visible').type('Juanga');
    cy.get('#searchBox').should('be.visible').clear();

    //edit
    cy.get('#edit-record-2').should('be.visible').click();
    cy.get('#age').should('be.visible').clear().type('50');
    cy.get('#salary').should('be.visible').clear().type('50000');
    cy.get('#submit').should('be.visible').click();

    //delete
    cy.get('#delete-record-2').should('be.visible').click();
  });
});
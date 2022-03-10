/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe('Section 01 - example type tab', () => {
  it('type pageUp', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');

    cy.get('#firstName')
      .type('Juanga').tab()
      .type('Aira').tab()
      .type('juanaira146@gmail.com');
  });
});
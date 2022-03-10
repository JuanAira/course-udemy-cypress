/// <reference types="Cypress" />

describe('Section 01 - example type pageUp, pageDown', () => {
  it('type pageUp', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
    
    cy.get('#userName').type('[pageup]')
  });

  it('type pageDown', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');

    cy.get('#userName').type('[pageDown]')
  });
});
/// <reference types="Cypress" />

describe('Section 01 - validation title', () => {
  it('validation title of page', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'ToolsQA');
  });
});
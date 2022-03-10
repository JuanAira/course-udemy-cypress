/// <reference types="Cypress" />

describe('Section 01 - intro asserts', () => {
  it('demo asserts', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.title().should('eq', 'ToolsQA');

    cy.get('#firstName').should('be.visible').type('Juanga');
    cy.get('#lastName').should('be.visible').type('Aira');
    cy.get('#userEmail').should('be.visible').should('be.enabled').type('juanaira146@gmail.com');
  });
});
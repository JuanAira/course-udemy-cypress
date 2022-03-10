/// <reference types='Cypress' />

require('cypress-xpath');

describe('Section 01 - click optins', () => {
  it('1 option', () => {
    cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/auth/login');
    cy.title().should('eq', 'OrangeHRM');

    cy.get('#btnLogin').should('be.visible').click();
    cy.get('#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title').should('be.visible').click();
    cy.get('#menu_admin_Job > .collapsible-header > .left-menu-title').should('be.visible').click();
  });

  it('Click Force true ', () => {
    cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/auth/login');
    cy.title().should('eq', 'OrangeHRM');

    cy.get('#btnLogin').should('be.visible').click();
    cy.get('#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title').should('be.visible').click();
    cy.get('#menu_admin_Job > .collapsible-header > .left-menu-title').should('be.visible').click({ force: true });
  });

  it.only('Click for coordinates (x,y) ', () => {
    cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/auth/login');
    cy.title().should('eq', 'OrangeHRM');

    cy.get('#btnLogin').should('be.visible').click();
    cy.get('.page-title').should('be.visible').click(50, 5);
    cy.get('.page-title').should('be.visible').click(90, 5);
  });
});
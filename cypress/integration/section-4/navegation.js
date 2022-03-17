/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Navigation between page', () => {
    it('Back, forward', () => {
        let time = 1000;
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(time);

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({ force: true });
        cy.wait(time);

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({ force: true });
        cy.wait(time);

        cy.go("back");
        cy.go("back");

        cy.go("forward");
        cy.go("forward");
    });


    it.only('Reload', () => {
        let time = 1000;
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(time);

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({ force: true });
        cy.wait(time);

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({ force: true });
        cy.wait(time);

        cy.get('#userName').should('be.visible').type('Juan');
        cy.wait(time);

        cy.get('#userEmail').should('be.visible').type('juan@gmail.com');
        cy.wait(time);

        cy.reload();

        cy.wait(time);

        cy.go("back");
    });
});
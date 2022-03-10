/// <reference types='Cypress' />

require('cypress-xpath')

describe('Types of Selectores  ', () => {
    it('Selector for id ', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.get('#userName').should('be.visible', { timeout: 5000 }).type('Carlos');
        cy.get('#userEmail').should('be.visible').type('demo@gmail.com');
    });

    it('Selector for attribute ', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.get("[placeholder='Full Name']").should('be.visible').type('Juan Perez Chavez');
    });

    it('Selector for Xpath ', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.xpath("//*[@id='userName']").should('be.visible').type('Juan Perez');
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should('be.visible').type('demoarvb@gmail.com');
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should('be.visible').type('Demo de la dirección');
    });

    it('Selector for contains ', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq', 'ToolsQA');

        cy.get('.custom-control-label').contains('Female').click();
        cy.get('.custom-control-label').contains('Other').click();
    });


    it('Selector for copy_selector ', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq', 'ToolsQA')

        cy.get('#userNumber').should('be.visible').type('465654654');
    });

    it('Selector for within ', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq', 'ToolsQA');

        cy.get('#userForm').within(() => {
            cy.get("[type='text']").should('have.attr', 'placeholder', 'First Name');
        }).then(
            cy.get("[type='text']").should('have.attr', 'placeholder', 'First Name').type('Juan')
        );
    });
});
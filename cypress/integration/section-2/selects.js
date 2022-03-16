/// <reference types='Cypress' />

require('cypress-xpath')

describe('Sección Checkbox  ', () => {
    it('Select one ', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html');
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios');

        cy.get('#select-demo').should('be.visible').select('Friday').should('have.value', 'Friday');
        cy.get('#select-demo').should('be.visible').select('Saturday').should('have.value', 'Saturday');
    });

    it('Select two ', () => {
        cy.visit('https://www.google.com/');
        cy.title().should('eq', 'Google');

        cy.get("[name='q']").should('be.visible').type('Ferrari').type('{enter}');
        cy.get('.MUFPAc > :nth-child(2) > .hide-focus-ring').click();
    });

    it('Options Multi-select ', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html');
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios');

        cy.get('#multi-select').should('be.visible').select(['California', 'Ohio', 'Washington']).then(() => {
            cy.get('#printMe').should('be.visible').click();
        });
    }); 
});
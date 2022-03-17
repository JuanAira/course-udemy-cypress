/// <reference types='Cypress' />

//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

require('cypress-xpath')
require('cypress-plugin-tab')

describe('Input of type date', () => {
    it('date 1', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html');
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker');
        cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').click();
        cy.get('.today').first().click({ force: true });
    });

    it('date 2', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html');
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker');

        cy.get("[placeholder='Start date]").should('be.visible').type('09/19/2021 {esc}');
        cy.get("[placeholder='End date']").should('be.visible').type('10/19/2021 {esc}');
    })

    it('date 3', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html');
        cy.title('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker');

        cy.get("[placeholder='Start date']").should('be.visible').type('09/19/2021 {esc}').tab().type('10/19/2021 {esc}');
    });
});
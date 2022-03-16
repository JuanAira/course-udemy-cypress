/// <reference types='Cypress' />

require('cypress-xpath')

describe('Section Checkbox  ', () => {
    it('Check one ', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium');

        cy.get("[type='checkbox']").check().should('be.checked');
        cy.get("[type='checkbox']").uncheck().should('not.be.checked');
    })

    it('Check for selection ', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium');

        cy.get('#isAgeSelected').click();
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").click();
    })

    it.only('Radios Button ', () => {
        cy.visit('https://www.seleniumeasy.com/test/basic-radiobutton-demo.html');
        cy.title().should('eq', 'Selenium Easy Demo - Radio buttons demo for Automation');

        cy.get('.panel-body > :nth-child(3) > input').click();
    })
});
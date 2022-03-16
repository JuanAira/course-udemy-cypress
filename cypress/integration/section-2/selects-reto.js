/// <reference types='Cypress' />

require('cypress-xpath')

describe('Section 2', () => {
    it.only('Challenge', () => {
        cy.visit('https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html')
        cy.title().should('eq', 'Selenium Easy - JQuery Dual List Box Demo')

        cy.get('.pickData').select(['Maria Eduarda', 'Giovanna', 'Manuela']).then(() => {
            cy.get('.pAdd').should('be.visible').click().then(() => {
                cy.get('.pAddAll').click().then(() => {
                    cy.get('.pRemoveAll').click().then(() => {
                        cy.log('Se movieron todos los elementos')
                    });
                });
            });
        });
    });
});
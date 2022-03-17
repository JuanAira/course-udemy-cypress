/// <reference types='Cypress' />

//https://docs.cypress.io/guides/references/assertions#Chai

require('cypress-xpath')
import 'cypress-file-upload'

describe('Section-3 Images ', () => {
    it('Upload image', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq', 'ToolsQA');

        const ruta = 'img1.jpg';
        cy.get("[type='file']").attachFile(ruta);
    });
});
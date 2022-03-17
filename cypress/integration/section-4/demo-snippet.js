/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Demo firts template', () =>{ 
    it('Demo one', () =>{
        let time=1000;
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq','ToolsQA');
        cy.wait(time);

        cy.get('#userName').should('be.visible').type('rodrigo');
        cy.wait(time);
    })
});
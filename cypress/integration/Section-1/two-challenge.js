/// <reference types='Cypress' />

require('cypress-xpath');
require('cypress-plugin-tab');

describe('Section 01 - two challenge', () =>{
    it('test in the aplication', () =>{
        cy.visit('http://computer-database.gatling.io/computers') 
        cy.title().should('eq','Computers database');

        //search
        cy.xpath("//input[contains(@id,'searchbox')]").type('ACE');
        cy.get('#searchsubmit').should('be.visible').click();

        //add
        cy.get('#add').should('be.visible').click();
        cy.get("[name='name']").should('be.visible').type('cypress');
        cy.get('#introduced').should('be.visible').type('2021-03-15').tab().type('2025-03-15');
        
        //combo
        cy.get('#company').should('be.visible').select('Nokia').should('have.value','16').wait(1500);
        cy.get('.primary').should('be.visible').click();
        cy.xpath("//input[contains(@id,'searchbox')]").type('cypress');
        cy.get('#searchsubmit').should('be.visible').click();
    });
});

/// <reference types="Cypress" />

//https://docs.cypress.io/guides/references/assertions#Chai

require('cypress-xpath')
import 'cypress-file-upload'

describe("Upload Imagenes  ", () => {
    it("Sinamope", () => {
        cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml");
        cy.title().should('eq', 'GOB.MX - SENASICA');

        cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m");
        cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i");
        cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click();
        cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click();
        cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click();
        cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V');

        cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({ force: true });

        cy.xpath("(//select[contains(@class,'form-control')])[4]").select('51159', { force: true }).should('have.value', '51159').first();

        cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({ force: true });

        cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290');

        cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({ force: true });

        cy.xpath("(//select[contains(@class,'form-control')])[4]").select('432302', { force: true }).should('have.value', '432302');

        cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({ force: true });
    });
});
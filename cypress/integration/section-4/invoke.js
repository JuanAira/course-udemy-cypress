
/// <reference types="Cypress" />
//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Handle Invoke.", () => {
    it("Invoke text", () => {
        let time = 1500
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(time);

        cy.get(".page-body > :nth-child(5)").invoke("text").as("info");

        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.");

        cy.get("[for='firstname']").invoke("text").as("title_name");

        cy.wait(time);

        cy.get("@title_name").should("contain", "First name:").then(() => {
            cy.get("#firstname").type("Rodrigo");
        });
    });

    it("Invoke stiles", () => {
        let time = 1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(time);

        cy.get("[for='firstname']").invoke("attr", "style", "color:Blue; font-size: 80px");
    });

    it("Invoke hide y show", () => {
        let time = 1500;

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(time);

        cy.get("[for='firstname']").invoke("hide");
        cy.get("#firstname").invoke("hide");

        cy.wait(time);

        cy.get("[for='firstname']").invoke("show", "3s");
        cy.get("#firstname").invoke("show", "4s");
    });


    it("Invoke hide y show challenge", () => {
        let time = 1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.get("[for='surname']").invoke("hide");
        cy.get("#surname").invoke("hide");
        cy.wait(time);

        cy.get("#firstname").should("be.visible").type("Carlos").then(() => {
            cy.wait(time);
            cy.get("[for='surname']").invoke("show", "6s");
            cy.get("#surname").invoke("show", "8s");
            cy.wait(time);
            cy.get("#surname").type("Olmos Salgado");
            cy.wait(time);
        });
    });

    it("Invoke src", () => {
        let time = 1500;
        cy.visit("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate');
        cy.wait(time);

        cy.xpath("//img[contains(@class,'cbt')]").invoke("attr", "src").should("include", "sponsored-by-CBT.png");
    });


    it.only("Invoke target_blank", () => {
        let time = 1500;
        cy.visit("https://dvwa.co.uk/");
        cy.title().should('eq', 'DVWA - Damn Vulnerable Web Application');
        cy.wait(time);

        cy.xpath("//*[@id='pagewidth']/div/div[5]/a[2]").invoke("removeAttr", "target").click({ force: true });
    });
});
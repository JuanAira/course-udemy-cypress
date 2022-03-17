/// <reference types="Cypress"  />


//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')

//ir a cypress.json
// "chromeWebSecurity": false,

describe("Hooks", () => {
  before(() => {
    cy.log("#############----Start------##################");
    cy.wait(2000);
  });

  beforeEach(() => {
    cy.log("This print each finaly a test - before");
    cy.wait(2000);
  });

  afterEach(() => {
    cy.log("This print each finaly a test - after");
    cy.wait(2000);
  });

  after(() => {
    cy.log("################# Last cicle --- Finaly ###################");
    cy.wait(2000);
    cy.visit('https://demoqa.com/');
  });

  it("test 1", () => {
    cy.log("test 1");
    cy.wait(2000);
  });

  it("test 2", () => {
    cy.log("test 2");
    cy.wait(2000);
  });

  it("test 3", () => {
    cy.log("test 3");
    cy.wait(2000);
  });
}) ;
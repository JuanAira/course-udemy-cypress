/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Challenge cypres for comand custom', () => {
  let time = 100;

  before(() => {
    cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html'),
      cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations');
    cy.wait(time);
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  it.only('test invalid name', () => {
    cy.Bloque_Reto_Form("R", "Perez", "carlos@gmail.com", "5548748965", "dirección uno", "México", "Alabama", "07989", "demo.com", "Proyecto demo uno", time);
    cy.Validar_campo2("(//small[@class='help-block'][contains(.,'Please enter more than 2 characters')])[1]", "Please enter more than 2 characters", "Nombre");
  });

  it.only('test valid email', () => {
    cy.Bloque_Reto_Form("Carlos", "Perez", "carlos.com", "5548748965", "dirección uno", "México", "Alabama", "07989", "demo.com", "Proyecto demo uno", time);
    cy.Validar_campo2("//small[contains(@data-bv-validator,'emailAddress')]", "Please supply a valid email address", "Emails");
  });

  it('test invalid name last name', () => {
    cy.Bloque_Reto_Form("Carlos", "****", "carlos@gmail.com", "5548748965", "dirección uno", "México", "Alabama", "07989", "demo.com", "Proyecto demo uno", time);
  });

  it('test Ok', () => {
    cy.Bloque_Reto_Form("Carlos", "Perez", "carlos@gmail.com", "5548748965", "dirección uno", "México", "Alabama", "07989", "demo.com", "Proyecto demo uno", time);
  });
});
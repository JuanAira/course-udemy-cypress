/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Hooks example', () => {
   let time = 2000;
   before(() => {
      cy.visit('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
      cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium');
      cy.wait(time);
   });

   it('Test uno', () => {
      cy.get('[type="checkbox"]').check().should('be.checked');
      cy.wait(time);
   });

   it('Test dos', () => {
      cy.get('[type="checkbox"]').uncheck().should('not.be.checked');
      cy.wait(time);
   });

   it('Test tres', () => {
      cy.xpath("//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[3]/label/input").check();
      cy.wait(time);
   });
});
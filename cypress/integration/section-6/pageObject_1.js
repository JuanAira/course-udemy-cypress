import ProyectoUno_Po from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Page objects Models', () => {
  const master = new ProyectoUno_Po()

  master.visitHome()

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it.only('Test section 1', () => {
    master.SeccionUno("Carlos", "Olmos", "carlos@gmail.com", 4000)
  })

  it('Test section 2', () => {
    master.SeccionDos("555645", "Dirección uno", "Estado Unidos", "Colorado", 200)
    cy.Validar_campo2("//small[contains(@data-bv-validator,'phone')]", "Please supply a vaild phone number with area code", "Télefono")
  })

  it('Test section 3', () => {
    master.SeccionTres("07980", "demo.com", "null", 200)
    cy.Validar_campo2("//small[@class='help-block'][contains(.,'Please enter at least 10 characters and no more than 200')]", "Please enter at least 10 characters and no more than 200", "Proyecto")
  })

  it('Test section 4', () => {
    master.SeccionUno("Carlos", "Olmos", "carlos@gmail.com", 1000)
    master.SeccionDos("5568573288", "Dirección uno", "Estado Unidos", "Colorado", 1000)
    master.SeccionTres("07980", "demo.com", "Proyecto uno demo", 2000)
  })
});
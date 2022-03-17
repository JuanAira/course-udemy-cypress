/// <reference types="Cypress" />

//https://github.com/4teamwork/cypress-drag-drop

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Elements of table", () => {
    it("children", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get(".btn-group").children(".btn-success");
        cy.get(".btn-group").children(".btn-success").should("contain", "Green").click({ force: true });
        cy.get(".btn-group").children(".btn-danger").should("contain", "Red").click({ force: true });
    })

    it("Select for EQ", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get("[type='button']").eq(2).should("contain", "Orange").click({ force: true });
        cy.get("[type='button']").eq(4).should("contain", "All").click({ force: true });
    });

    it("Select for filter", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get("[type='button']").filter('.btn-warning');
        cy.get("[type='button']").filter('.btn-success');
        cy.get("[type='button']").filter('.btn-success').click();
        cy.get("[type='button']").filter('.btn-warning').should("contain", "Orange").click();
    });

    it("Select for find", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click();
        cy.get("[type='button']").contains("Orange").click();
    });

    it("Select for first", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get(".btn-group").find("button").first().click();
        cy.get(".btn-group").find("button").last().click();
    })

    it("Select for NextAll", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get("[type='button']").should("contain", "Green");
        cy.get("[type='button']").should("contain", "Green").nextAll().should("have.length", 4);
    });

    it("Select father", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get("[type='button']").parent().should("have.class", "btn-group");
    });

    it("Challenge", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        cy.get("[type='button']").eq(1).should("contain", "Green").click({ force: true });
        cy.get("[type='checkbox']").check({ force: true });
        cy.get("[type='button']").eq(4).should("contain", "All").click({ force: true });
        cy.get("[type='checkbox']").check({ force: true });
    });


    it("Challenge with for", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        for (let x = 1; x <= 4; x++) {
            cy.get("[type='button']").eq(x).click({ force: true });
            cy.get("[type='checkbox']").check({ force: true });
        }
    });

    it("Challenge with for y Asserts", () => {
        cy.visit('https://www.seleniumeasy.com/test/table-records-filter-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');

        for (let x = 1; x <= 4; x++) {
            let nombreBoton = ""
            if (x == 1) {
                nombreBoton = "Green";
            }
            else if (x == 2) {
                nombreBoton = "Orange";
            }
            else if (x == 3) {
                nombreBoton = "Red";
            }
            else if (x == 4) {
                nombreBoton = "All";
            }

            cy.get("[type='button']").eq(x).should("contain", nombreBoton).click({ force: true });
            cy.get("[type='checkbox']").check({ force: true });
        }
    });

    it("Show inputs", () => {
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo');

        const datos = [];

        cy.get(".odd td").each(($el, index, $list) => {
            datos[index] = $el.text()
        }).then(() => {
            for (let i = 0; i <= datos.length; i++) {
                cy.log(datos[i])
            }
        });
    });

    it("Sum values the input class .odd", () => {
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo');

        const datos = [];
        let cantidadOdd = 0;

        cy.get("[role='row']  td").each(($el, index, $list) => {
            datos[index] = $el.text();
        }).then(() => {
            for (let i = 0; i <= datos.length; i++) {
                cy.log(datos[i])
                if (Number(datos[i])) {
                    cantidadOdd += Number(datos[i]);
                }
            }
            cy.log("La cantidad total es: " + cantidadOdd);
            expect(cantidadOdd).to.eq(394);
        });
    });

    it("Value the input specific", () => {
        cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo');

        const campo = cy.get("tbody > :nth-child(7) > :nth-child(2)");
        campo.each(($el, index, $list) => {
            const dato = $el.text();
            cy.log(dato);

            if (dato.includes("Javascript Developer")) {
                campo.eq(index).next().next().then((age) => {
                    const Edad = age.text();
                    cy.log(Edad)
                    cy.log("La edad de Javascript Developer es: " + Edad);
                    expect(Edad).to.equal('39')
                })
            }
        });
    });

    it("Select multi checkbox in page diferent.", () => {
        cy.visit("https://datatables.net/extensions/select/examples/initialisation/checkbox.html");
        cy.title().should('eq', 'DataTables example - Checkbox selection');

        for (let x = 1; x <= 6; x++) {
            cy.xpath("//a[contains(@data-dt-idx," + x + ")]").should("be.visible").click({ force: true });

            cy.get(".select-checkbox").should("be.visible").click({ multiple: true }, { force: true });
        }
    });
});
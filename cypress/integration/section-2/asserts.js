/// <reference types='Cypress' />

require('cypress-xpath')

describe('section 2 - contains', () => {
    it('Assert contains', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq', 'My Store');

        cy.get('#block_top_menu').contains('Women').click();
    });

    it('Assert find, eq', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq', 'My Store');

        cy.get('.product-container').find('.product-image-container').eq(2).click();
    });

    it('Assert find, eq, validating that the dress is new and the price', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('eq', 'My Store');

        cy.get('.product-container').find('.product-image-container').eq(3).click();

        cy.get('#product_condition .editable').then((e) => {
            let state = e.text()
            if (state == 'New') {
                cy.log('El vestido es Nuevo')
            }
        });

        cy.get('#our_price_display').then((e) => {
            let price = e.text();
            price = price.slice(1, 3);

            if (price > 30) {
                cy.log("The dress is out of our budget, we can't buy it")
                cy.xpath("//*[@id='columns']/div[1]/a[2]").click();
            } else {
                cy.log("The dress is in our budget, continue with the purchase")
                cy.get('#add_to_cart').click();
            }
        });
    });

    it('Assert contain.text y have.text', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.get('#userName').should('be.visible').type('rodrigo');
        cy.get('#userEmail').should('be.visible').type('rodrigo@gmail.com');
        cy.get('#submit').should('be.visible').click();

        cy.get('#name').should('have.text', 'Name:rodrigo');
        cy.get('#name').should('contain.text', 'rodrigo');
    });

    it('Assert have.text more then', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.get('#userName').should('be.visible').type('rodrigo');

        cy.get('#userName').should('have.value', 'rodrigo').then(() => {
            cy.get('#userEmail').should('be.visible').type('rodrigo@gmail.com');
            cy.get('#submit').should('be.visible').click();
        });

    })

    it('Assert have.class', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.get('#userName').should('be.visible').should('have.class', 'mr-sm-2').then(() => {
            cy.get('#userName').type('rodrigo');
        });
    })

    it('Assert have.class and the function and', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.get('#userName').should('be.visible').and('have.class', 'mr-sm-2').then(() => {
            cy.get('#userName').type('rodrigo');
        });
    });

    it('Assert have.class  and the function and', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');

        cy.get('#userName').should('be.visible').and('not.have.class', 'mr-sm-22').then(() => {
            cy.get('#userName').type('rodrigo');
        });
    });

    it('Assert length and the css', () => {
        cy.visit('https://www.seleniumeasy.com/test/table-pagination-demo.html');
        cy.title().should('eq', 'Selenium Easy - Table with Pagination Demo');

        cy.get('#myTable >tr >td').should('have.length', 91).and('have.css', 'padding', '8px')
    });

    it('Contains', () => {
        let time = 1000

        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium');
        cy.wait(time);

        cy.get('.at-cm-no-button').should('be.visible').click({ force: true });
        cy.get('.form-group > #user-message').should('be.visible').type('Demo del contenido');

        cy.wait(time);
        cy.contains("[type='button']", 'Show Message').should('be.visible').click({ force: true });
    });

    it.only('Chanllenge Asserts', () => {
        let time = 1600

        cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium');
        cy.wait(time);

        cy.get('.at-cm-no-button').should('be.visible').click({ force: true });

        let a = 40
        let b = 35

        cy.get('#sum1').should('be.visible').and('have.class', 'form-control').type(a);
        cy.wait(time);
        cy.get('#sum2').should('be.visible').and('have.class', 'form-control').type(b);
        cy.wait(time);

        cy.contains("[type='button']", 'Get Total').click();

        cy.get('#displayvalue').should('be.visible').then((e) => {
            let r = a + b;
            cy.log('el valor de r: ' + r);
            cy.log(e.text());
            let res = e.text();

            if (r == res) {
                cy.log('Son iguales');
            } else {
                cy.log('el resultado es incorrecto');
            }

            if (res > 50) {
                a = a - 10
                b = b - 10
                cy.get('#sum1').invoke('attr', 'placeholder').should('contain', 'Enter value').then(() => {
                    cy.get('#sum1').clear().type(a);
                    cy.wait(time);
                    cy.get('#sum1').invoke('attr', 'style', 'color:blue');
                });
                cy.wait(time);
                cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b);
                cy.wait(time);
                cy.get('#sum2').invoke('attr', 'style', 'color:blue');
                cy.wait(time);
                cy.contains("[type='button']", 'Get Total').click();

                cy.get('#displayvalue').should('be.visible').then((e) => {
                    cy.get('#displayvalue').invoke('attr', 'style', 'color:red');
                });
            } else {
                a = a + 5;
                b = b + 5;
                cy.get('#sum1').should('be.visible').and('have.class', 'form-control').clear().type(a);
                cy.wait(time);
                cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b);
                cy.wait(time);
                cy.contains("[type='button]", 'Get Total').click();
            }
        });
    });
});
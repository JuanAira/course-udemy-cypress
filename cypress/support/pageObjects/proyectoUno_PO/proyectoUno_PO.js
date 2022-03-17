class ProyectoUno_Po {
    visitHome() {
        let time = 1000
        before(() => {
            cy.visit('https://www.seleniumeasy.com/test/input-form-demo.html'),
                cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations')
            cy.wait(time)
        })
    }

    SeccionUno(name, last_name, email, t) {
        let time = t
        cy.xpath("//input[contains(@name,'first_name')]").clear().should('be.visible').type(name)
        cy.wait(time)
        cy.screenshot("Campo nombre")
        cy.xpath("//input[contains(@name,'last_name')]").clear().should('be.visible').type(last_name)
        cy.wait(time)
        cy.screenshot("Campo Last_name")
        cy.xpath("//input[contains(@name,'email')]").clear().should('be.visible').type(email)
        cy.wait(time)
    }

    SeccionDos(tel, dir1, ciudad, estado, t) {
        let time = t
        cy.xpath("//input[contains(@name,'phone')]").clear().should('be.visible').type(tel)
        cy.wait(time)
        cy.xpath("//input[contains(@name,'address')]").clear().should('be.visible').type(dir1)
        cy.wait(time)
        cy.xpath("//input[contains(@name,'city')]").clear().should('be.visible').type(ciudad)
        cy.wait(time)
        cy.xpath("//select[contains(@name,'state')]").select(estado, { force: true })
        cy.wait(time)
    }

    SeccionTres(cp, web, proyecto, t) {
        let time = t
        cy.xpath("//input[contains(@name,'zip')]").clear().should('be.visible').type(cp)
        cy.wait(time)
        cy.xpath("//input[contains(@name,'website')]").clear().should('be.visible').type(web)
        cy.wait(time)
        cy.xpath("//input[contains(@value,'yes')]").check().should('be.checked')
        cy.wait(time)
        cy.xpath("//textarea[contains(@class,'form-control')]").clear().should('be.visible').type(proyecto)
        cy.wait(time)
        cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({ force: true })
        cy.wait(time)
    }
}

export default ProyectoUno_Po;
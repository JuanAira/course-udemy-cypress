describe('Welcome to course cypress, section 1', () => {
  it('My firts test - Hello world', () => {
    cy.log('Hello world');
    cy.wait(1500);
  });

  it('Two test, input name', () => {
    cy.visit('https://demoqa.com/text-box');
    
    cy.get('#userName').type('Juanga');
    cy.wait(1500);
  });
});
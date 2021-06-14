/// <reference types="cypress" />

context('Keyboard Navigation', () => {
  it('navigate', () => {
    cy.visit('http://localhost:3000/');
    cy.get("body").realClick();
    cy.realPress('Tab');
    cy.realPress('ArrowDown');
    cy.realPress('ArrowDown');
    cy.realPress('ArrowDown');
    cy.realPress('Tab');
    cy.realPress('Enter');
  });
});

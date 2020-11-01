/// <reference types="cypress" />
describe("Project Number 1: Basic Website", () => {
  beforeEach(() => {
    cy.visit("./index.html");
  });
  it('has a title of "Basic Website"', () => {
    cy.title().should("contain", "Basic Website");
  });
});

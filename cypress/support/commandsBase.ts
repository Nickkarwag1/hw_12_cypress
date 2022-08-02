// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import dataBase from "../fixtures/base.json";

Cypress.Commands.add("checkTextHeader", (containText: string): void => {
    cy.get(dataBase.selectors.titlePage)
        .should("be.visible")
        .and("contain", containText);
});

Cypress.Commands.add("clickAndScrollBtnLook", (): void => {
    cy.get(dataBase.selectors.lookButton)
        .scrollIntoView()
        .should("be.visible")
        .click({ force: true });
});

Cypress.Commands.add("choiceModel", (model: string, value: string): void => {
    cy.get(dataBase.selectors.choiceModel)
        .select(model)
        .should("have.value", value);
});

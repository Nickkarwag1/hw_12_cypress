import dataVW from "../fixtures/pickVW.json";
import dataSubaru from "../fixtures/pickSubaru.json";

Cypress.Commands.add("clickVolkswagenLogo", (expectedValue: string): void => {
    cy.get(dataVW.selectors.parentVW).within(() => {
        cy.get(dataVW.selectors.carVW).click({ force: true });
    });
    cy.url().should("contain", expectedValue);
});

Cypress.Commands.add("visitPageSubaru", (expectedValue: string): void => {
    cy.visit(dataSubaru.selectors.urlSubaru);
    cy.url().should("contain", expectedValue);
});

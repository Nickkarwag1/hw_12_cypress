import dataSignUp from "../fixtures/signUpAndLogin.json";

Cypress.Commands.add(
    "clickAndCheckSignUp",
    (title: string, urlValue: string): void => {
        cy.get(dataSignUp.selectors.signUpTab).click({ force: true });
        cy.title().should("eq", title);
        cy.url().should("contain", urlValue);
    },
);

Cypress.Commands.add("clickAndCheckLogin", (): void => {
    cy.get(dataSignUp.selectors.receptionTab).click({ force: true });
    cy.get(dataSignUp.selectors.login)
        .should("be.visible")
        .get(dataSignUp.selectors.password)
        .should("be.visible");
});

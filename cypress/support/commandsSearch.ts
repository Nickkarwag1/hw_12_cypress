import dataSearch from "../fixtures/searchField.json";

Cypress.Commands.add("searchText", (text: string): void => {
    cy.intercept("GET", "**text=BMW+X7").as("waitText");
    cy.get(dataSearch.selectors.searchInput)
        .type(text)
        .should("have.value", text);
    cy.get(dataSearch.selectors.searchButton).click({ force: true });
    cy.wait("@waitText");
});

Cypress.Commands.add("clickBtnCars", (nameBtn: string | RegExp): void => {
    cy.get(dataSearch.selectors.headButtonCars)
        .contains("span", nameBtn)
        .should("be.visible")
        .click({ force: true });
});

Cypress.Commands.add("checkResultSearch", (text: string | RegExp): void => {
    cy.get(dataSearch.selectors.resultSearch)
        .contains("h3", text)
        .should("be.visible");
});

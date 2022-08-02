// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        dataCy(value: string): Chainable<Element>;

        clickVolkswagenLogo(expectedValue: string): void;

        choiceModel(model: string, value: string): void;

        clickAndScrollBtnLook(): void;

        checkTextHeader(containText: string): void;

        visitPageSubaru(expectedValue: string): void;

        searchText(text: string): void;

        clickBtnCars(nameBtn: string | RegExp): void;

        checkResultSearch(text: string | RegExp): void;

        clickAndCheckSignUp(title: string, urlValue: string): void;

        clickAndCheckLogin(): void;
    }
}

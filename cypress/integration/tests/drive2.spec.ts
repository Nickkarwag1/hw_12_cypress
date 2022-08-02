describe("Visit website drive2.ru", () => {
    before(() => {
        cy.fixture("searchField").then((search) => (this.search = search));
        cy.fixture("signUpAndLogin").then((signUp) => (this.signUp = signUp));
        cy.fixture("pickVW").then((vw) => (this.vw = vw));
        cy.fixture("pickSubaru").then((sub) => (this.sub = sub));
    });
    beforeEach(() => {
        cy.visit("/");
    });
    it("Check Sign Up page", { scrollBehavior: false }, () => {
        cy.clickAndCheckSignUp(this.signUp.registration, this.signUp.urlValue);
    });
    it("Check login page", { scrollBehavior: false }, () => {
        cy.clickAndCheckLogin();
        cy.checkTextHeader(this.signUp.hi);
    });
    it("Pick Volkswagen Passat CC", { scrollBehavior: false }, () => {
        cy.clickVolkswagenLogo(this.vw.carVW.name);
        cy.choiceModel(this.vw.carVW.model, this.vw.carVW.value);
        cy.clickAndScrollBtnLook();
        cy.checkTextHeader(this.vw.carVW.model);
    });
    it("Pick Subaru WRX STI", { scrollBehavior: false }, () => {
        cy.visitPageSubaru(this.sub.car.name);
        cy.choiceModel(this.sub.car.model, this.sub.car.value);
        cy.clickAndScrollBtnLook();
        cy.checkTextHeader(this.sub.car.model);
    });
    it("In search field enter BMW X7", { scrollBehavior: false }, () => {
        cy.searchText(this.search.nameCar);
        cy.clickBtnCars(this.search.carsTab);
        cy.checkResultSearch(this.search.model);
    });
});

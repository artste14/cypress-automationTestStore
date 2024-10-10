import { CreateAccount } from "../../support/pageObjects/CreateAccount";

const createAccount: CreateAccount = new CreateAccount();

describe("Creating new account tests", () => {

  beforeEach(() => {
    cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
      cy.visit(registrationPersonalDetails.url);
    });
  });

  it("Create new accoount with subscribe newsletter option", () => {
    createAccount.createNewAccountWithSubscribe();

    // Add an assertion that the mentioned request appeared correctly after registration           
    cy.wait("@succesRequest").then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
    });

    cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
      createAccount.getNewAccountSuccesMessageHeading().should('contain.text', registrationPersonalDetails.succesMessageHeading);
    });

    //Here, as part of this test, there should be a request or other function that will delete a previously created user but unfortunately the API of the web application doesn't have such an endpoint/functionality

  });

  it("Create new accoount without subscribe newsletter option", () => {
    createAccount.createNewAccountWithoutSubscribe();

    // Add an assertion that the mentioned request appeared correctly after registration           
    cy.wait("@succesRequest").then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
    });

    cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
      createAccount.getNewAccountSuccesMessageHeading().should('contain.text', registrationPersonalDetails.succesMessageHeading);
    });

    //Here, as part of this test, there should be a request or other function that will delete a previously created user but unfortunately the API of the web application doesn't have such an endpoint/functionality

  });

  it('Create new accoount with existing user email', () => {
    createAccount.createNewAccountWithoutSubscribe();

    createAccount.getNewAccountEmailAlreadyRegisteredAlert()
      .should("contain.text", 'Error: E-Mail Address is already registered!')
  });








});

import { CreateAccount } from "../../support/pageObjects/CreateAccount";

const createAccount: CreateAccount = new CreateAccount();

describe("Creating new account tests", () => {

  beforeEach(() => {
    cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
      cy.visit(registrationPersonalDetails.url);
    });
  });

  it.only("Create new accoount with subscribe newsletter option", () => {
    cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
      createAccount.createNewAccountWithSubscribe();
    });

    //Here, as part of this test, there should be a request or other function that will delete a previously created user but unfortunately the API of the web application doesn't have such an endpoint/functionality
 
  });

  it("Create new accoount without subscribe newsletter option", () => {
    cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
      createAccount.createNewAccountWithoutSubscribe();
    });

    //Here, as part of this test, there should be a request or other function that will delete a previously created user but unfortunately the API of the web application doesn't have such an endpoint/functionality

  });

  it('Test description', () => {
     // code here
  });








});

import { LoginPage } from "../../support/pageObjects/LoginPage";

const loginPage: LoginPage = new LoginPage();

describe("Login Test", () => {

  beforeEach(() => {
    cy.fixture("accountLogin").then((accountLogin) => {
      cy.visit(accountLogin.url);
    });
  });

  describe('Test POST Request to Create Account', () => {
    it("should fail login with incorrect credentials", () => {
      cy.fixture("accountLogin").then((accountLogin) => {
        loginPage.assertAccountLogin();
      });
    });

  });




});

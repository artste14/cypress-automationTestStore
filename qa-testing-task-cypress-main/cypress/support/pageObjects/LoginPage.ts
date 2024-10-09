//Cypress.Chainable<JQuery<HTMLElement>> oznacza obiekt zwracany przez Cypress, który reprezentuje element HTML opakowany w obiekt jQuery,
// i pozwala na wykonywanie kolejnych operacji w formie łańcuchowej.
//Dzięki temu można efektywnie testować i manipulować elementami strony w sposób typowy dla narzędzi do automatyzacji testów, takich jak Cypress.

export class LoginPage {
  getLoginNameFieldInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#loginFrm_loginname");
  }

  getPasswordFieldInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#loginFrm_password");
  }

  getLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#loginFrm button[title='Login']");
  }

  getForgotYourPasswordLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains("fieldset a", "Forgot your password");
  }

  getForgotYourLoginLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#loginFrm button[title='Login']");
  }

  getNewCustomerContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("button[title='Continue']");
  }

  getLoginNameFieldLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".returncustomer label").first();
  }

  getPasswordFieldLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".returncustomer label").last();
  }

  getReturnCustomerHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".returncustomer .heading2");
  }

  getNewCustomerHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".newcustomer .heading2");
  }



  assertAccountLogin(): void {
    cy.fixture("accountLogin").then((accountLogin) => {
      cy.url().should('equal',accountLogin.url)
      this.getLoginNameFieldLabel().should('contain.text', accountLogin.loginNameFieldLabel);
      this.getPasswordFieldLabel().should('contain.text', accountLogin.passwordFieldLabel);
      this.getReturnCustomerHeader().should('have.text', accountLogin.returningCustomerHeader);
      this.getNewCustomerHeader().should('have.text', accountLogin.newCustomerHeader);
      this.getNewCustomerContinueButton().should('be.visible');
      this.getLoginButton().should('be.visible');
      this.getForgotYourPasswordLink().should('be.visible');
      this.getForgotYourLoginLink().should('be.visible');
    });

  }

}

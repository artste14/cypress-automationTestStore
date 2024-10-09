//Cypress.Chainable<JQuery<HTMLElement>> oznacza obiekt zwracany przez Cypress, który reprezentuje element HTML opakowany w obiekt jQuery,
// i pozwala na wykonywanie kolejnych operacji w formie łańcuchowej.
//Dzięki temu można efektywnie testować i manipulować elementami strony w sposób typowy dla narzędzi do automatyzacji testów, takich jak Cypress.

export class loginPage {
  getLoginNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#loginFrm_loginname");
  }

  getPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
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

  // assertProductDetails(): void {
  //     cy.fixture("productDetails").then((productDetails) => {
  //         this.getLoginNameInput().should('have.text', productDetails.name);
  //         this.getProductPrice().should('have.text', productDetails.price);
  //         this.getProductDescription().should('contain.text', productDetails.description);
  //         this.getProductStockAmount().should('have.text', `${productDetails.stockAmount} in stock`);
  //     });

  // }
}

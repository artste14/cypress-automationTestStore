export class ProductDetailsPageObject {
    getProductTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="product-name"]'); 
    }

    getProductPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="special-price"]');
    }

    getProductDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="product-description"]');
    }

    getProductStockAmount(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="quantity-selector-stock"]');
    }

    assertProductDetails(): void {
        cy.fixture("productDetails").then((productDetails) => {
            this.getProductTitle().should('have.text', productDetails.name);
            this.getProductPrice().should('have.text', productDetails.price);
            this.getProductDescription().should('contain.text', productDetails.description);
            this.getProductStockAmount().should('have.text', `${productDetails.stockAmount} in stock`);
        });

    }
}

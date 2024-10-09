describe("I'm so bad, make me better", () => {
    it("Assert incorrect register", () => {
        // ACT: visit the login page
        cy.visit("https://demo-next-sap-contentful.alokai.com/login");

        // ACT: fill in the login form with incorrect data
        cy.get('input').eq(0).type('test@test.com');
        cy.get('input').eq(1).type('password');

        // ACT: submit the form
        cy.get('button[type="submit"]').click();

        // ASSERT: check if the error message is displayed
        cy.get("[data-testid=alert-body]").should("be.visible");
    });

    it("Assert product details", () => {
        // ACT: visit the product page
        cy.visit("https://demo-next-sap-contentful.alokai.com/product/300046036-t-shirt-men-playboard-flower-ss-black-l/300046036?sku=300046036");

        // ARRANGE: wait for page to be loaded
        cy.wait(3000);

        // ASSERT: check if the product price is displayed correctly
        cy.get('span.font-semibold.typography-headline-3.text-neutral-900').should('have.text', '$42.81');

        // ASSERT: check if the default product variant is "L"
        const defaultVariant = cy.get('[data-testid="chip"]').first().invoke('text');
        console.log(defaultVariant); // but how to assert it is "L" :( ??
    });
});

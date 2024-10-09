import {ProductDetailsPageObject} from "../../support/pageObjects/ProductDetailsPageObject";

const productDetailsPage: ProductDetailsPageObject = new ProductDetailsPageObject();
describe("I have issues :(", () => {
    it("What's wrong here?", () => {
        cy.fixture("productDetails").then((productDetails) => {
            cy.visit(productDetails.url);
            productDetailsPage.assertProductDetails();
        });

    });
});

//DONE!
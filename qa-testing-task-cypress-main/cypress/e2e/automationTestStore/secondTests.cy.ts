

describe('Create new tests', () => {
    it('check sorting', () => {

        cy.visit('https://automationteststore.com/')

        cy.contains(".block_frame .col-md-3",'Skinsheen Bronzer Stick')
        .find("[title='Add to Cart']")
        .click()

        cy.contains(".block_frame .col-md-3",'Benefit Bella Bamba')
        .find("[title='Add to Cart']")
        .click()

        cy.get(".dropdown-toggle .fa-shopping-cart").click()

        cy.fixture('cartContent').then((expectedCart) => {
            // Wysłanie żądania do API
            cy.request('https://automationteststore.com/index.php?rt=r/product/product/addToCart')
              .then((response) => {
                // Sprawdzenie, czy status odpowiedzi jest 200
                expect(response.status).to.eq(200);
                
                // Sprawdzenie, czy obiekt subtotalDiscountedPrice w odpowiedzi jest zgodny z tym z pliku fixture
                expect(response.body.total).to.deep.equal(expectedCart.total);
              });
          });

       


    })
})

//DONE!
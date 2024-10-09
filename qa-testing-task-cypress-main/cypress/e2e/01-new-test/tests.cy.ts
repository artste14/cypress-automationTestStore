////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/*
Scenario:
1. Visit category page
2. Set sorting by price (low to high)
3. Check if product prices are sorted correctly
*/
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


describe('Create new tests', () => {
    it('check sorting', () => {

        cy.visit('https://demo-next-sap-contentful.alokai.com/')

        cy.intercept('https://demo-next-sap-contentful.alokai.com/api/commerce/getCart').as('requestAPI2');

        cy.intercept('https://demo-next-sap-contentful.alokai.com/_next/data/3diPmjKqBUNx8SlygdsBW/en/category.json?sort=price-low-to-high').as('requestAPI')

        cy.get("[data-testid='category-index-link']").click()

        cy.wait('@requestAPI2')

        cy.get("[data-testid='select-input']").select("price-low-to-high")

        cy.url().should("eq", "https://demo-next-sap-contentful.alokai.com/category?sort=price-low-to-high")

        cy.wait('@requestAPI')

        cy.get("[data-testid='select-input']").should("have.prop", "value", "price-low-to-high")

        const prices: string[] = [];

        cy.get("[data-testid='special-price']").each(($el) => {
            // Pobiera tekst z elementu i dodaje go do tablicy
            cy.wrap($el)
                .invoke('text')
                .then((text: string) => {
                    prices.push(text.replace('$', ''));
                });
        }).then(() => {
            // Wykonaj akcje po zapisaniu wszystkich wartości do tablicy
            cy.log('Wszystkie ceny:', prices);
            // Tutaj możesz dodać dodatkowe asercje lub operacje na tablicy prices
        }).then(() => {
            // Konwertujemy tablicę stringów na tablicę liczb
            const pricesAsNumbers = prices.map(price => parseFloat(price));

            // Logowanie tablicy przed asercją
            cy.log('Wszystkie ceny:', pricesAsNumbers);
           
 
            // Sprawdzamy, czy każda wartość w tablicy jest większa lub równa poprzedniej
            cy.wrap(pricesAsNumbers).should((pricesArray: number[]) => {
                for (let i = 1; i < pricesArray.length; i++) {
                    expect(pricesArray[i]).to.be.gte(pricesArray[i - 1]); // Sprawdza, czy prices[i] >= prices[i-1]
                }
            });
        });


    })
})

//DONE!
export class CreateAccount {
    getNewAccountFirstName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#AccountFrm_firstname')
    }

    getNewAccountLastName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_lastname");
    }

    getNewAccountEmail(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_email");
    }

    getNewAccountTelephone(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_telephone");
    }

    getNewAccountFax(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_fax");
    }

    getNewAccountCompany(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_company");
    }

    getNewAccountAddress1(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_address_1");
    }

    getNewAccountAddress2(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_address_2");
    }

    getNewAccountCity(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_city");
    }

    getNewAccountState(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_zone_id");
    }

    getNewAccountZipcode(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_postcode");
    }

    getNewAccountCountryId(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_country_id");
    }

    getNewAccountLoginName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_loginname");
    }

    getNewAccountPassword(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_password");
    }

    getNewAccountPasswordConfirm(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_confirm");
    }

    getNewAccountNewsletterRadioButtonYes(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_newsletter1[type='radio']");
    }

    getNewAccountNewsletterRadioButtonNo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_newsletter0[type='radio']");
    }

    getNewAccountNewsPrivacyPolicyCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#AccountFrm_agree");
    }

    getNewAccountContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("button.lock-on-click[title='Continue']");
    }

    getNewAccountSuccesMessageHeading(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get("#maincontainer h1.heading1");
    }


    createNewAccountWithSubscribe(): void {
        cy.intercept('https://automationteststore.com/index.php?rt=account/success').as('succesRequest');

        cy.intercept('/.magnolia/admincentral/UIDL/?v-uiId=*').as('requestAPI');

        cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
            this.getNewAccountFirstName()
                .type(registrationPersonalDetails.firstName)
                .should("contain.value", registrationPersonalDetails.firstName);

            this.getNewAccountLastName()
                .type(registrationPersonalDetails.lastName)
                .should("contain.value", registrationPersonalDetails.lastName);

            this.getNewAccountEmail()
                .type(registrationPersonalDetails.email)
                .should("contain.value", registrationPersonalDetails.email);

            this.getNewAccountTelephone()
                .type(registrationPersonalDetails.tel)
                .should("contain.value", registrationPersonalDetails.tel);

            this.getNewAccountFax()
                .type(registrationPersonalDetails.fax)
                .should("contain.value", registrationPersonalDetails.fax);

            this.getNewAccountCompany()
                .type(registrationPersonalDetails.company)
                .should("contain.value", registrationPersonalDetails.company);

            this.getNewAccountAddress1()
                .type(registrationPersonalDetails.adress)
                .should("contain.value", registrationPersonalDetails.adress);

            this.getNewAccountCity()
                .type(registrationPersonalDetails.city)
                .should("contain.value", registrationPersonalDetails.city);

            this.getNewAccountCountryId()
                .select(registrationPersonalDetails.country)
                .find('option:selected')
                .should('have.text', registrationPersonalDetails.country);

            // this.getNewAccountCountryId()
            //     .invoke('prop', 'selectedOptions')
            //     .its('0')                          
            //     .invoke('prop', 'label')        
            //     .should('equal', registrationPersonalDetails.country);

            this.getNewAccountState()
                .select(registrationPersonalDetails.state)
                .find('option:selected')
                .should("have.text", registrationPersonalDetails.state); // For select elements, use 'have.value'

            this.getNewAccountZipcode()
                .type(registrationPersonalDetails.zipcode)
                .should("contain.value", registrationPersonalDetails.zipcode);

            this.getNewAccountLoginName()
                .type(registrationPersonalDetails.loginName)
                .should("contain.value", registrationPersonalDetails.loginName);

            this.getNewAccountPassword()
                .type(registrationPersonalDetails.password)
                .should("contain.value", registrationPersonalDetails.password);

            this.getNewAccountPasswordConfirm()
                .type(registrationPersonalDetails.passwordConfirm)
                .should("contain.value", registrationPersonalDetails.passwordConfirm);

            // Selecting newsletter (optional)
            this.getNewAccountNewsletterRadioButtonYes().check();

            // Agree to the Privacy Policy checkbox
            this.getNewAccountNewsPrivacyPolicyCheckbox().check();

            //Click in "Continue" button and submit
            this.getNewAccountContinueButton().click();

            // Add an assertion that the mentioned request appeared correctly after registration           
            cy.wait("@succesRequest").then((interception) => {
                expect(interception.response?.statusCode).to.equal(200);
            });

            this.getNewAccountSuccesMessageHeading().should('contain.text', registrationPersonalDetails.succesMessageHeading);

        });


    }

    createNewAccountWithoutSubscribe(): void {
        cy.intercept('https://automationteststore.com/index.php?rt=account/success').as('succesRequest');

        cy.intercept('/.magnolia/admincentral/UIDL/?v-uiId=*').as('requestAPI');

        cy.fixture("registrationPersonalDetails").then((registrationPersonalDetails) => {
            this.getNewAccountFirstName()
                .type(registrationPersonalDetails.firstName)
                .should("contain.value", registrationPersonalDetails.firstName);

            this.getNewAccountLastName()
                .type(registrationPersonalDetails.lastName)
                .should("contain.value", registrationPersonalDetails.lastName);

            this.getNewAccountEmail()
                .type(registrationPersonalDetails.email)
                .should("contain.value", registrationPersonalDetails.email);

            this.getNewAccountTelephone()
                .type(registrationPersonalDetails.tel)
                .should("contain.value", registrationPersonalDetails.tel);

            this.getNewAccountFax()
                .type(registrationPersonalDetails.fax)
                .should("contain.value", registrationPersonalDetails.fax);

            this.getNewAccountCompany()
                .type(registrationPersonalDetails.company)
                .should("contain.value", registrationPersonalDetails.company);

            this.getNewAccountAddress1()
                .type(registrationPersonalDetails.adress)
                .should("contain.value", registrationPersonalDetails.adress);

            this.getNewAccountCity()
                .type(registrationPersonalDetails.city)
                .should("contain.value", registrationPersonalDetails.city);

            this.getNewAccountCountryId()
                .select(registrationPersonalDetails.country)
                .find('option:selected')
                .should('have.text', registrationPersonalDetails.country);

            // this.getNewAccountCountryId()
            //     .invoke('prop', 'selectedOptions')
            //     .its('0')                          
            //     .invoke('prop', 'label')        
            //     .should('equal', registrationPersonalDetails.country);

            this.getNewAccountState()
                .select(registrationPersonalDetails.state)
                .find('option:selected')
                .should("have.text", registrationPersonalDetails.state); // For select elements, use 'have.value'

            this.getNewAccountZipcode()
                .type(registrationPersonalDetails.zipcode)
                .should("contain.value", registrationPersonalDetails.zipcode);

            this.getNewAccountLoginName()
                .type(registrationPersonalDetails.loginName)
                .should("contain.value", registrationPersonalDetails.loginName);

            this.getNewAccountPassword()
                .type(registrationPersonalDetails.password)
                .should("contain.value", registrationPersonalDetails.password);

            this.getNewAccountPasswordConfirm()
                .type(registrationPersonalDetails.passwordConfirm)
                .should("contain.value", registrationPersonalDetails.passwordConfirm);

            // Without newsletter (optional)
            this.getNewAccountNewsletterRadioButtonNo().check();

            // Agree to the Privacy Policy checkbox
            this.getNewAccountNewsPrivacyPolicyCheckbox().check();

            //Click in "Continue" button and submit
            this.getNewAccountPasswordConfirm().click();
        });
    }


}




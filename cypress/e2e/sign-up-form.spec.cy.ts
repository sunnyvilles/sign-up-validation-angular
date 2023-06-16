const getElement = (elementName: string): string => `input[formcontrolname=${elementName}]`
const baseUrl = 'http://localhost:4200/#/sign-up';
const notifyUrl = 'http://localhost:4200/#/notify/Please+go+to+sign+in+page+to+login+as+new+user';
//const notifyUrl = `http://localhost:4200/#/notify/Please go to sign in page to login as new user`;

describe('SignUpFormComponent E2E Test', () => {

    it('should fill out the form invalid values', () => {

        cy.visit('/')
        cy.get(getElement('firstName')).type('One');
        cy.get(getElement('lastName')).type('Two');
        cy.get(getElement('email')).type('One.Two@three.com');
        cy.get(getElement('password')).type('passoneWord');

        cy.get('#password-errors').should('be.visible');

        cy.get('form').invoke('submit', (e: Event) => {
            e.preventDefault();
            throw new Error('Form should not be submitted when invalid values are given');
        });

        // the URL hasn't changed, so no submission happened
        cy.url().should('eq', baseUrl);

    });

    it('should fill out the form and submit it', () => {
        cy.visit('/')
        cy.get(getElement('firstName')).type('one');
        cy.get(getElement('lastName')).type('two');
        cy.get(getElement('email')).type('one.two@three.com');
        cy.get(getElement('password')).type('Passworld');

        cy.get('button[type="submit"]').click();

        // Adjust the URL below to match the success page URL in your application
        cy.url().should('eq', notifyUrl);
    });
});
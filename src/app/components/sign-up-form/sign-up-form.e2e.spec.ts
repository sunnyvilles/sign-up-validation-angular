describe('SignUpFormComponent E2E Test', () => {
    const signUpPageUrl = 'http://localhost:4200/signup';

    it('should fill out the form and submit it', () => {
        cy.visit(signUpPageUrl);
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('input[name="password"]').type('P@ssword123');
        cy.get('button[type="submit"]').click();

        // Adjust the URL below to match the success page URL in your application
        cy.url().should('eq', 'http://localhost:4200/success');
    });
});
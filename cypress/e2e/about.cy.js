describe("About Page Tests", () => {
    beforeEach(() => {
        cy.visit('/');
        });
    if("should redirect to the login page when user clicks on about",()=>{
        cy.get("#findParksBtn").click();
        cy.url().should("include", "loginpage2.html");
    });
    it('should load the homepage', () => {
        cy.get('title').should('contain', 'Parcs');
        cy.get('.header').should('be.visible');
      });

    it('should navigate to the login page when Find Parks is clicked', () => {
    cy.get('#findParksBtn').click();
    cy.url().should('include', 'loginpage2.html');
    });
});

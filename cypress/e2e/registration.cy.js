describe("Registration Page Tests", () => {
    beforeEach(() => {
        //I WANT TO VISIT THE START UP PAGE BEFORE NAVIGATING
    })
    it("should allow a user to register", () => {
        cy.visit("http://127.0.0.1:5500/parcs-2/RegisterPage.html"); 
        cy.get("#UFname").type("Bernice");
        cy.get("#ULname").type("Chiaha");
        cy.get("#UEmail").type("bericeUchiaha@my.unt.edu");
        cy.get("#Upassword").type("Newpassword@2022");
        cy.get("#register-btn").click();
        cy.url().should("include", "RegisterPage.html");
    });

    it("should show an error for empty fields", () => {
        cy.visit("http://127.0.0.1:5500/parcs-2/RegisterPage.html");
        cy.get("#register-btn").click();
        cy.get("#error-message").should("contain", "Please fill out all field");
      });
    it("should navigate to the home page when you click on the home option", ()=>{
        cy.visit("http://127.0.0.1:5500/parcs-2/RegisterPage.html");
        cy.get("#home-link").click();
        cy.url().should("include", "index.html");
    })
    // it("should navigate to the login page if the user has an account created", () => {
    //     cy.visit("http://127.0.0.1:5500/parcs-2/RegisterPage.html");
    //     cy.find("#signInText")
    //       .scrollIntoView() // Ensures the element is in view
    //       .should("be.visible") // Ensures the element is visible
    //       .click();
    //     cy.url().should("include", "RegisterPage.html");
    // });
});
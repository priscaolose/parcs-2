describe("Login Page Tests", () => {

    it("should allow a user to log in", () => {
        cy.visit("http://127.0.0.1:5500/parcs-2/loginpage2.html"); 
        cy.get("#email").type("bchiaha@gmail.com");
        cy.get("#password").type("Newpassword@2022");
        cy.get("#login-btn").click();
        cy.url().should("include", "dentonList.html");
    });
    it("should show an error for empty fields", () => {
        cy.visit("http://127.0.0.1:5500/parcs-2/loginpage2.html");
        cy.get("#login-btn").click();
        cy.get("#error-message").should("contain", "Email is required");
      });
      it("should show an error for invalid email format", () => {
        cy.visit("http://127.0.0.1:5500/parcs-2/loginpage2.html");
        cy.get("#email").type("invalidEmail@example");
        cy.get("#login-btn").click();
        cy.get("#error-message").should("contain", "Invalid email address");
      });
      it("should show an error for empty password", () => {
        cy.visit("http://127.0.0.1:5500/parcs-2/loginpage2.html");
        cy.get("#email").type("invalidEmail@example.com");
        cy.get("#password").clear();
        cy.get("#login-btn").click();
        cy.get("#error-message").should("contain", "Password is required.");
    });
});
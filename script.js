//your JS code here. If required.
describe('Form Validation Test', () => {
    const baseUrl = 'http://localhost:3000'; // Replace with your actual base URL
    
    it('should display an alert for empty form inputs', () => {
        cy.visit(baseUrl + "/main.html"); // Visit the correct page
        
        // Click the submit button
        cy.get("button#btn").click();
        
        // Listen to the window alert and assert the message
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Please enter valid details."); // Match the exact alert text
        });
    });
});



// // DESCRIBE BLOCK 1 - DUMMY TESTS (opens page, checks if true == true, checks if 10 == 3);

// // it1) default Cypress test, checks the configuration of the environment, opens the default web site;
// // it2) another way of checking if everything runs nice & clean;
// // it3) waits more than default cy wait-time to move on to the next test;
// // it4) pauses the execution of the test until the resume button is clicked;
// // it5) same as it2, but this time failed on purpose;
 
// describe("some dummy tests", () => {
//   it("passes", () => {
//     cy.visit("https://example.cypress.io")
//   })
//   it("true should be true1", () => {
//     expect(true).to.equal(true)
//   })
//   it("should wait for 5 seconds", () => {
//     cy.wait(5000)
//     })
//   it("should pause the test", () => {
//     cy.pause()
//   })
//   it("true should be true2", () => {
//     expect(10).to.equal(3)
//   })
// })

//-------------------------------------------------------

// // DESCRIBE BLOCK 2 - BASIC URL ACTIONS (loads URL); 

// // it1) loads URL with timeout option (fails when timeout exceeds time given; 1000ms = 1s);  
// // it2) checks if a certain text is a part of an URL, e.g. index.html); 

// describe("some basic browser URL actions", () => {
//   it("should load correct URL", () => {
//     cy.visit("https://us.motorsport.com/", { timeout: 10000 })
//   })
//   it("should check correct URL fragment", () => {
//     cy.url().should("include", "us")
//   })
//   it("should check visibility on an element on the page", () => {
//     cy.get(".ms-topbox-header").should("be.visible")
//   })
// })

//--------------------------------------------------------



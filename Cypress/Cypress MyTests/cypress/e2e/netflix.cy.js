

describe("I want to see the a mountain weather report", () => {
  it("should load the google page and check the URL", () => {
    cy.visit("https://www.google.com/", {timeout: 10000})
    cy.url().should("include", "com")
  })
   it("should type in 'Colin McRae' phrase and execute search", () => {
    cy.get('.gLFyf').type("mountain weather forecast {Enter}");
    // alternatywa: cy.contains('Szukaj w Google').click()
  })
  it("should click on 'Mountain weather' category in menu", () => {
    cy.get("cite").contains("https://www.mountain-forecast.com").click()
  })
  // it("should click on 'Results & Standings' category in menu", () => {
  //   cy.get("a").contains("Results & Standings", {force: true}).click()
  // })
 
  
  
})


// describe("Basic browser actions 2", () => {
//   it("should click on 'Fantasy' category", () => {
//     cy.get("a").contains("Fantasy").click()
//     cy.get("h1").contains("Fantasy")
//   })
//   it("should display the number of results", () => {
//     cy.get(".product_pod").its("length").should("eq", 20)
//   })
// })



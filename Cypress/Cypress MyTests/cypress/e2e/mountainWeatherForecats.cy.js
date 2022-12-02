

describe("I want to see the a mountain weather report", () => {
  it("should load the page and check the URL", () => {
    cy.visit("https://www.mountain-forecast.com/", {timeout: 10000})
    cy.url().should("include", "com")
  })
  it("should wait for 2 seconds just to see a map a little bit longer :)", () => {
    cy.wait(2000)
  })  
  it("should type in 'Gerlach' and press enter", () => {
    cy.get('#location').type("Gerlach {Enter}");
})
})



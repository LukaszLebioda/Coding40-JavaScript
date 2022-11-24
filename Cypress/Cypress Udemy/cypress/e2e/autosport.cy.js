describe("I want to check whether there are any new articles about my favourite WRC rally driver", () => {
  it("should load the page", () => {
    cy.visit("https://us.motorsport.com/", {timeout: 10000})
  })
  it("should check URL", () => {
    cy.url().should("include", "us")
  })
})
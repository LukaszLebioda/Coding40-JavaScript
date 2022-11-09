describe("Basic browser actions 1", () => {
  it("should run/load the page and check url", () => {
    cy.visit("https://books.toscrape.com/index.html", {timeout: 10000})
    cy.url().should("include", "index.html")
  })
  // it("should wait 3 seconds", () => {
  //   cy.wait(3000)
  // })
  // it("should pause the test", () => {
  //   cy.pause()
  // })
  // it("should check the h1 tag", () => {
  //   cy.get("h1").should("be.visible")
  // })
})

// clicks on links and buttons to check if they're working
// verifies and displays the number of elements (e.g. search results)
describe("Basic browser actions 2", () => {
  it("should click on 'Fantasy' category", () => {
    cy.get("a").contains("Fantasy").click()
    cy.get("h1").contains("Fantasy")
  })
  it("should display the number of results", () => {
    cy.get(".product_pod").its("length").should("eq", 20)
  })
})













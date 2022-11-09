
// the new things here is an optional cy.log() function use to checkpoiting, debugging, experimenting and such
// and the cy.reload() to reload the page if we e.g. changed sth and want to check whether the change is saved

describe("first test on Cypress", () => {
  it("should load the page", () => {
    cy.visit("https://books.toscrape.com/index.html", { timeout: 10000 })
    cy.url().should("include", "index.html")
    // cy.log + cy.reload + cy.log
    cy.log("This is before reloading")
    cy.reload()
    cy.log("This is after reloading")
    // cy.log + cy.reload + cy.log
  })
  it("should click on Poetry category", () => {
    cy.get("a").contains("Poetry").click()
  })
  it("should click on 'Olio' book", () => {
    cy.get("a").contains("Olio").click()
  })
  it("should have correct book price", () => {
    cy.get(".price_color").contains("23.88")
  })
})

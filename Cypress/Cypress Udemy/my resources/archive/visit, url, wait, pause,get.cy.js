
describe("Browser actions", () => {
  // loading URL with timeout option (fails when timeout exceeds time given; 1000ms = 1s)
  it("should load correct URL", () => {
    cy.visit("https://example.com/", { timeout: 10000 })
  })
  // checking whether the URL is correct (checking whether a certain text is a part of an URL) 
  it("should check correct URL", () => {
    cy.url().should("include", "example.com")
  })
  // implicit wait (optional) - if we want to wait more than default cypress waiting time to move on to the next test (next it)
  it("should wait for 3 seconds", () => {
    cy.wait(3000)
  })
  // pauses the execution of the test until the resume button is clicked
  it("should pause the execution", () => {
    cy.pause()
  })
  // checking, whether an element (e.g. a header h1) is visible on the page
  it("should check for correct element on the page", () => {
    cy.get("h1").should("be.visible")
  })
})









// describe("My first simple test with Cypress", () => {
//   it("True should be True", () => {
//      expect(true).to.equal(true)     
//   })

//   it("5 should be 5", () => {
//     expect(5).to.equal(5)
//   })
// })

// describe("My 2nd dummy test with Cypress", () => {
//   it("False should be FALSE", () => {
//     expect(false).to.equal(false)
//   })
// })

describe("Browser actions", () => {
  it("should load correct URL", () => {
    cy.visit("https://www.onet.pl/", { timeout: 1000 })
  })

})




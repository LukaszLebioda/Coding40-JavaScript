
// how to open www pages and grab/get a certain element (in our case we're grabbing the google searchbox and typing something in it, and then clicking the search button or pressing enter)
it("Google Search", () => {
  cy.visit("https://www.google.pl/")
  cy.get('.gLFyf').type("Coding40 {Enter}")
  // cy.contains('Szukaj w Google').click()
  // instead of cy.contains('Szukaj w Google').click() we could type: 
})
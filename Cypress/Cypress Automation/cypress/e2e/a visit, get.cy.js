
// grabs a searchbox, types something inside, then clicks the search button or presses enter
it("Google Search", () => {
  cy.visit("https://www.google.pl/");
  cy.get('.gLFyf').type("Automation Step by Step {Enter}");
  
  // alternatywa: cy.contains('Szukaj w Google').click()
})
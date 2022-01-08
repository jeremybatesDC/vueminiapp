// https://docs.cypress.io/api/introduction/api.html

describe("Are brewpub search results being appended to page?", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get('[type="search"]').type('Philadelphia');
    cy.get('li.result');
  });
});

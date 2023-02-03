describe("Test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="chart"').should("be.visible");
  });
});

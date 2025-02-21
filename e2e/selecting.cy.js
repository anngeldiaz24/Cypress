describe('Text box with max characters', () => {
  it('displays the appropiate remaining characters count', () => {
    cy.visit('http://localhost:3000/example-3');
  
      //Getting elements using a cy identifier
      cy.get('[data-cy="last-name-chars-left-count"]')
      .invoke('text')
      .should('equal', '15');

      cy.get('[data-cy="input-last-name"]').type('hello');

      cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '10');

      cy.get('[data-cy="input-last-name"]').type(' my friend');

      cy.get('[data-cy="last-name-chars-left-count"]')
        .invoke('text')
        .should('equal', '0');
  });


  it('prevents the user from typing more characters once max is excedeed', () => {
    cy.visit('http://localhost:3000/example-3');
    cy.get('[data-cy="input-last-name"]').type('Hzsdisadasdaosdoasdaoasd');
    cy.get('[data-cy="input-last-name"]').should('have.attr', 'value', 'Hzsdisadasdaosd');
  });
});





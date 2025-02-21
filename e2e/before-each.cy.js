describe('Text box with max characters', () => {

  beforeEach(() => {
    //Defining variables just one time
    cy.visit('http://localhost:3000/example-3');
    cy.get('[data-cy="last-name-chars-left-count"]').as('charsLeftSpan');
    cy.get('[data-cy="input-last-name"]').as('lastNameInput');
  });

  it('displays the appropiate remaining characters count', () => {

      cy.get('@charsLeftSpan')
      .then($charsLeftSpan => {
        expect($charsLeftSpan.text()).to.equal('15');
      });

      cy.get('@lastNameInput').type('hello');

      cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '10');

      cy.get('@lastNameInput').type(' my friend');

      cy.get('@charsLeftSpan')
        .invoke('text')
        .should('equal', '0');
  });


  it('prevents the user from typing more characters once max is excedeed', () => {
    
    cy.get('@lastNameInput').type('Hzsdisadasdaosdoasdaoasd');
    cy.get('@lastNameInput').should('have.attr', 'value', 'Hzsdisadasdaosd');
  });
});





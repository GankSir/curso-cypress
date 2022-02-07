/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        //cy.visit enter app location
        cy.visit('http://localhost:3000/register')
        //cy.get search for an element 
        //.type insert an element
        cy.get('[data-cy=name]').type('bruno');
        cy.get('[data-cy=email]').type('teste@teste.com');
        cy.get('[data-cy=whatsapp]').type('31991442623');
        cy.get('[data-cy=city]').type('Sete Lagoas');
        cy.get('[data-cy=uf]').type('MG');
        //click button
        cy.get('[data-cy=submit]').click()
    });

    it('deve realizar um login no sistema', () => {

    });

});
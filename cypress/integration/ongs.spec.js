/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        //cy.visit enter app location
        cy.visit('http://localhost:3000/register')
        //cy.get search for an element 
        //.type insert an element
        cy.get('[data-cy=name]').type('Danilo Peta');
        cy.get('[data-cy=email]').type('teste@teste.com');
        cy.get('[data-cy=whatsapp]').type('31991442623');
        cy.get('[data-cy=city]').type('Sete Lagoas');
        cy.get('[data-cy=uf]').type('MG');
        //routing
        //start server com cy.server()
        //create a route  cy.route()
        //assing the rout a alias
        //wait with cy.wait
        cy.server();
        cy.route('POST', '**/ongs').as('postOng');

        //click button
        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;

        })

    });

    it('deve realizar um login no sistema', () => {

    });

});
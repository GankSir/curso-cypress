/// <reference types="cypress" />

describe('Ongs', () => {
    //slip pausa o teste 
    it('devem poder realizar um cadastro', () => {
        //cy.visit enter app location
        cy.visit('http://localhost:3000/register');
        //cy.get search for an element 
        //.type insert an element
        cy.get('[data-cy=name]').type('Danilo Peta');
        cy.wait(1000)
        cy.get('[data-cy=email]').type('teste@teste.com');
        cy.wait(1000)
        cy.get('[data-cy=whatsapp]').type('31991442623');
        cy.wait(1000)
        cy.get('[data-cy=city]').type('Sete Lagoas');
        cy.wait(1000)
        cy.get('[data-cy=uf]').type('MG');

        //routing serve para escutar onde a aplicação esta se conectando com aplicações http e criar mocks
        //start server with cy.server()
        //create a route  cy.route()
        //assing the rout a alias
        //wait with cy.wait and do a validation 

        //inicia um servidor que vai rotear respostas 
        //call cy.ser and router before action

        //the route serves to monitor a given request and create mock with the route system. 
        cy.route('POST', '**/ongs').as('postOng');

        // //click button
        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })

    });

    it('deve realizar um login no sistema', () => {

        const createOngId = Cypress.env('createdOngId');

        cy.log(createOngId);

        cy.visit('http://localhost:3000/');
        cy.get('input').type(createOngId);
        cy.get('button').click();
    });

});


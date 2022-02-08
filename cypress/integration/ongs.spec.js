/// <reference types="cypress" />

describe('Ongs', () => {
    //slip pausa o teste 
    it.skip('devem poder realizar um cadastro', () => {
        //cy.visit enter app location
        cy.visit('http://localhost:3000/register')
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

        //routing serve para escutar onde a aplicação esta se comunicando com aplicações http e criar mocks
        //start server com cy.server()
        //create a route  cy.route()
        //assing the rout a alias
        //wait with cy.wait and do a validation 

        //inicia um servidor que vai rotear resposts 
        //call cy.ser and router before action
        cy.server();
        cy.route('POST', '**/ongs').as('postOng');

        // //click button
        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            //.body valida essa propriedade
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })


    });

    it('deve realizar um login no sistema', () => {
        // cy.request({
        //     method: 'POST',
        //     url: 'http://localhost:3333/ongs',
        //     body: {
        //         name: "thiago",
        //         email: "teste@mail.com",
        //         whatsapp: "3191442623",
        //         city: "Sete lagoas",
        //         uf: "MG"

        //     }

        // }).then(response => {
        //     expect(response.body.id).is.not.null;
        //     cy.log(response.body.id);

        //     Cypress.env('createdOngId',response.body.id)
        // });

        cy.visit('http://localhost:3000/');
        cy.get('input').type('Meu id');
        cy.get('.button').click();

    });

});


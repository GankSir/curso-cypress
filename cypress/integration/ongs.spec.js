/// <reference types="cypress" />

describe('Ongs', () => {
    //slip pausa o teste 
    it.skip('devem poder realizar um cadastro', () => {
        //cy.visit enter app location
        cy.visit('http://localhost:3000/register');
        //cy.get search for an element 
        //.type insert an element
        cy.get('[data-cy=name]').type('Bruno Teles');
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

    it.skip('deve realizar um login no sistema', () => {

        //const createOngId = Cypress.env('createdOngId');

        //cy.log(createOngId);

        cy.visit('http://localhost:3000/');
        cy.get('input').type(Cypress.env('createdOngId'));
        cy.get('.button').click();
    });


    //must be able to logout
    //must be able to register a new cases
    //must can exclude a case
    it.skip('devem fazer logout', () => {
        cy.login();
        cy.get('button').click()

    });
    //must be able to register a new cases
    it.skip('Devem poder cadastrar novos casos', () => {
        cy.login()

        cy.get('.button').click();

        cy.get('[placeholder="Título do caso"]').type('Teste para avanço');
        cy.get('textarea').type('Vamos avançar todos os dias nesses teste para automatizar a finpass');
        cy.get('[placeholder="Valor em reais"]').type(200)

        cy.route('POST', '**/incidents').as('newIncident');

        cy.get('.button').click();

        cy.wait('@newIncident').then((xhr) => {
            //o status da resposta vai ser 200
            expect(xhr.status).to.eq(200);
            //o response body vai ter a propriedade id
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        })

    });

    it('devem poder excluir um caso', () => {
        cy.createNewIncident();
        cy.login();
        
        //cy.get('li > button > svg').click()
    });

});
//d95fa084

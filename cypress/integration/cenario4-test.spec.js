/// <reference types="cypress" />

describe('Teste de Finalização da Compra', () => {
    it('Verifica se todos os produtos selecionados são exibidos no resumo da compra e finaliza a venda', () => {
        //Realiza o login
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click(); //Adiciona o item ao carrinho
        cy.get('#shopping_cart_container').click(); //Abre o carrinho
        cy.get('button[name="checkout"]').click();

        //Informa os dados para finalizar a venda
        cy.get('input[name="firstName"]').type("Lucas");
        cy.get('input[name="lastName"]').type("Silva");
        cy.get('input[name="postalCode"]').type("000000000");
        cy.get('input[name="continue"]').click();
        
        //Valida se o item está lá
        cy.get('#item_4_title_link').should('exist');

        cy.get('button[name="finish"]').click(); //Clica no botão para finalizar a venda

        //Valida se o texto de sucesso foi exibido na tela
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });

});
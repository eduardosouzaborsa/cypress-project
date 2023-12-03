/// <reference types="cypress" />

describe('Teste de Adição de Item ao Carrinho', () => {
    //Faz o login
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
    });

    it('Deve adicionar um item ao carrinho e validar se ele está lá', () => {
      cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click(); //Adiciona o item ao carrinho
      cy.get('#shopping_cart_container').click(); //Abre o carrinho
      cy.get(".cart_item").should('exist'); //Valida se o item está lá.
    });
  });
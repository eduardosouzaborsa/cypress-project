/// <reference types="cypress" />

describe('Teste de Login e Navegação', () => {
    it('Deve fazer login com sucesso', () => {
        //Realiza o login
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
    
        cy.url().should('include', '/inventory.html'); //Valida se entrou na tela inicial

        //Faz logoff
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    it('Deve navegar pelo menu e levar para as páginas corretas', () => {
        //Realiza o login
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        
        cy.get('#shopping_cart_container').click(); //Abre o carrinho

        // //Valida se, ao clicar em All Items, a tela correta é aberta
        cy.get('#react-burger-menu-btn').click();
        cy.get('#inventory_sidebar_link').click();
        cy.url().should('include', '/inventory.html');

        //Valida se ao clicar em Logout, a tela certa é apresentada
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('include', 'https://www.saucedemo.com');
    });
  });
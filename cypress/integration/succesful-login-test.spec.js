/// <reference types="cypress" />

describe('Teste de Login com sucesso', () => {
    it('Deve fazer login com sucesso', () => {
      //Realiza o login
      cy.visit('https://www.saucedemo.com');
      cy.get('input[name="user-name"]').type('standard_user');
      cy.get('input[name="password"]').type('secret_sauce');
      cy.get('input[name="login-button"]').click();
  
      cy.url().should('include', '/inventory.html'); //Valida se entrou na tela inicial
    });
  });
/// <reference types="cypress" />

describe('Teste de Login bloqueado', () => {
    it('Deve tentar fazer login com um usuário bloqueado', () => {
      //Realiza o login
      cy.visit('https://www.saucedemo.com');
      cy.get('input[name="user-name"]').type('locked_out_user');
      cy.get('input[name="password"]').type('secret_sauce');
      cy.get('input[name="login-button"]').click();
  
      cy.get('.error-message-container.error h3[data-test="error"]')
        .should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });
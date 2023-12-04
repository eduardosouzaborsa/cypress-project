/// <reference types="cypress" />

const productData = [
    { name: 'Sauce Labs Backpack', price: '$29.99' },
    { name: 'Sauce Labs Bike Light', price: '$9.99' },
    { name: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
    { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
    { name: 'Sauce Labs Onesie', price: '$7.99' },
    { name: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' },
];

const productIds = [
    'item_0_title_link',
    'item_5_title_link',
    'item_1_title_link',
    'item_2_title_link',
    'item_3_title_link',
    'item_4_title_link'
  ];

describe('Teste de Adição de Produtos ao Carrinho', () => {
    it('Deve adicionar o produto corretamente ao carrinho', () => {
        //Realiza o login
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click(); //Adiciona o item ao carrinho
        cy.get('#shopping_cart_container').click(); //Abre o carrinho
        cy.get(".cart_item").should('exist'); //Valida se o item está lá.

        //Faz logoff
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    });

    it('Valida o número máximo de produtos no carrinho', () => {
        //Realiza o login
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();

        //Adiciona todos os produtos ao carrinho
        cy.get('.btn_inventory').each(($button) => {
            $button.click();
        });

        cy.get('#shopping_cart_container').click(); //Abre o carrinho

        //Valida se todos os produtos estão lá
        productIds.forEach((productId, index) => {
            const expectedLink = productIds[index];
            cy.get("#" + expectedLink).should('exist');
          });

    });

});
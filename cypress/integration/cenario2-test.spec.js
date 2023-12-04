/// <reference types="cypress" />

const productData = [
    { name: 'Sauce Labs Backpack', price: '$29.99' },
    { name: 'Sauce Labs Bike Light', price: '$9.99' },
    { name: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
    { name: 'Sauce Labs Fleece Jacket', price: '$49.99' },
    { name: 'Sauce Labs Onesie', price: '$7.99' },
    { name: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99' },
];

describe('Teste de Catálogo de Produtos', () => {
    it('Deve fazer login com sucesso', () => {
        //Realiza o login
        cy.visit('https://www.saucedemo.com');
        cy.get('input[name="user-name"]').type('standard_user');
        cy.get('input[name="password"]').type('secret_sauce');
        cy.get('input[name="login-button"]').click();
        
        //Valida o nome e o preço dos produtos da tela
        cy.get('.inventory_item').each(($product, index) => {
            const name = $product.find('.inventory_item_name').text();
            const price = $product.find('.inventory_item_price').text();

            const expectedProduct = productData[index];

            expect(name).to.equal(expectedProduct.name);
            expect(price).to.equal(expectedProduct.price);
        });

    });
});
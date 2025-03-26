/// <Reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()  PRIMEIRO ITEM DA LISTA
            //.last()   ÚLTIMO ITEM DA LISTA
            //.eq(2)    SELEÇÃO POR ESCOLHA DE POSIÇÃO NA LISTA
            .contains('Aero Daily Fitness Tee')
            .click()

            cy.get('#tab-description > :nth-child(1)').should('contain' , 'Need an everyday action tee that helps keep you dry? The Aero Daily Fitness Tee is made of 100% polyester wicking knit that funnels moisture away from your skin. Don’t be fooled by its classic style; this tee hides premium performance technology beneath its unassuming look.')
    });
});
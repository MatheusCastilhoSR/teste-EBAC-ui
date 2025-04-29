/// <Reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')

            cy.get('#tab-description > :nth-child(1)').should('contain' , 'The Aether Gym Pant is built for the studio, but adapts perfectly well to outdoor and gym environs too. With lightweight stretch fabric and water-repellent exterior, the Aether is ready for all comers.')
    });

    it('Deve buscas um produto com sucesso', () => {
        let produto ='Cassius Sparring Tank'
        produtosPage.buscarProduto(produto)
        cy.get('.woocommerce-product-details__short-description > p').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('ariel roll sleeve sweatshirt')
        cy.get('.woocommerce-product-details__short-description > p').should('contain', 'Ariel Roll Sleeve Sweatshirt')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let quantidade = 4
        produtosPage.buscarProduto('Hero Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Black', quantidade)

        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Hero Hoodie” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho, 
            dados[0].cor, 
            dados[0].quantidade)

        cy.get('.woocommerce-message').should('contain' , dados[0].nomeProduto)
})

    });
});
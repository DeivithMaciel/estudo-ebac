/// <reference types="cypress" />

describe('Testes dos botoes', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app')
    })

    it('Teste do botao adicionar', () => {
        cy.get('input[placeholder="Nome"]').type('Devith maciel')
        cy.get('input[placeholder="E-mail"]').type('devithfagundes@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('51 123456789')
        cy.get('.adicionar').click()

        cy.get('.contato').should('have.length', 4)
    })

    it('Teste do botão de deletar', () => {
        cy.get('.contato').should('have.length', 4)
        cy.get('.contato').first().find('button').contains('Deletar').click()
        cy.get('.contato').should('have.length', 3)
    }) 

    it('Testando o botão editar', () => {
        cy.get('.contato').first().find('button').contains('Editar').click()

        cy.get('input[placeholder="Nome"]').clear().type('Devith maciel')
        cy.get('input[placeholder="E-mail"]').clear().type('devithfagundes@gmail.com')
        cy.get('input[placeholder="Telefone"]').clear().type('51 123456789')
        cy.get('.alterar').click()

        cy.get('.contato').first().contains('Devith maciel')
        cy.get('.contato').first().contains('devithfagundes@gmail.com')
    })
})

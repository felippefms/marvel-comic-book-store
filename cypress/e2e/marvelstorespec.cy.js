describe('marvel comic book test', () => {
  it('Visits Marvel Comic book Store', () => {
    cy.visit('https://felippefms.github.io/marvel-comic-book-store/')

    cy.wait(2500)
    cy.get('.sc-jTrPJq > img').click();   //Abrir Menu
    cy.wait(2000)
    cy.get('#a2').click();   //Abrir Quadrinhos
    cy.wait(2000)
    cy.get(':nth-child(3) > .sc-csCMJt').click();  //Adicionar Quadrinho
    cy.wait(2000)
    cy.get(':nth-child(7) > .sc-csCMJt').click();   //Adicionar Quadrinho
    cy.wait(2000)
    cy.get(':nth-child(8) > .sc-csCMJt').click();   //Adicionar Quadrinho
    cy.wait(2000)
    cy.get('.storeiconsty').click();    //Abrir a Loja
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-lnAgIa > #removebtnicon').click();    //Remover Item do Carrinho
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-lnAgIa > #removebtnicon').click();    //Remover Item do Carrinho
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-lnAgIa > #removebtnicon').click();    //Remover Item do Carrinho
    cy.wait(2000)
    cy.get('.sc-jTrPJq > img').click();   //Abrir Menu
    cy.wait(2000)
    cy.get('#a2').click();    //Abrir Quadrinhos
    cy.wait(2000)
    cy.get(':nth-child(3) > :nth-child(1) > .sc-kFuwaP').click();   //Abrir quadrinho para visualizar
    cy.wait(2000)
    cy.get('.sc-jTrPJq > img').click();
    cy.wait(2000)
    cy.get('[href="/marvel-comic-book-store"]').click();
  })
})
describe('Test frontend predictions', () => {
  it('the prediction should be 1', () => {
    cy.visit('http://localhost:1234')
    cy.get('.canvas').trigger('mousedown')
    cy.wait(100)
    cy.get('.canvas').trigger('mouseup')
    cy.wait(300)
    cy.get('canvas').click(140, 30)
    cy.window().then(win => win.drawLine(140,30,140,250))
    cy.get('canvas').click(140, 250)
    cy.get('[id=maxNum]') // 8.
      .should('contain', '1') 
  })
})
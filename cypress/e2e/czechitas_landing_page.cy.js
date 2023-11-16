describe('Verify the landing page of Komunita Czechitas web', () => {
  it('login textboxes are visible', () => {
    cy.visit('https://komunita.czechitas.cz/')

    cy.get('frm-slotLoader-singIn-signIn-form-login').should('be.visible')
    cy.get('frm-slotLoader-singIn-signIn-form-password').should('be.visible')
  })

  it('login button is clickable', () => {
    cy.visit('https://komunita.czechitas.cz/')

    cy.get('btn btn-primary button').click()
    
    
  })

  it('register link is clickable', () => {
    cy.visit('https://komunita.czechitas.cz/')
  })
})
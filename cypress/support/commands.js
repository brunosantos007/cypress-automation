Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[name="firstName"]').type('Bruno')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('Teste@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
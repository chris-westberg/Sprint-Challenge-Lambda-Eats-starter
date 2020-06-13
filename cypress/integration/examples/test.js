describe('Testing input', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3002/pizza')
    })
    it('tests name input', function(){
        cy.get('data-cy=name')
    })
})
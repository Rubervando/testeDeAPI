it('Teste de Validação que deletou o usuario', () => {
    cy.api({
        method:'GET',
        url:'/user/login',
        failOnStatusCode: false,
        body:{
            "username": "joao",
            "password": "tutorial"
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
                          
    })
});
it('Teste de Validação que deletou o usuario', () => {
    cy.api({
        method:'GET',
        url:'/user/logout',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
                          
    })
});
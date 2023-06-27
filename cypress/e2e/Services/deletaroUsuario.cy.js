it('Teste de Criação validação de Id 150', () => {
    cy.api({
        method:'POST',
        url:'user',
        failOnStatusCode: false,
        body:{
            
            "id": 150,
            "username": "joao",
            "firstName": "teste",
            "lastName": "postman",
            "email": "testedeapi@post.com",
            "password": "tutorial",
            "phone": "85 88998899",
            "userStatus": 0
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            
    })
});

it('Teste de Validação do novo usuario', () => {
    cy.api({
        method:'GET',
        url:'/user/joao',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(150)
            expect(response.body.username).to.eq("joao")
            expect(response.body.firstName).to.eq("teste")
            expect(response.body.lastName).to.eq("postman")
            expect(response.body.email).to.eq("testedeapi@post.com")
            expect(response.body.password).to.eq("tutorial")
            expect(response.body.phone).to.eq("85 88998899")
        
              
    })
});
it('Teste de delatar o usuario', () => {
    cy.api({
        method:'DELETE',
        url:'/user/joao',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
});
it('Teste de Validação que deletou o usuario', () => {
    cy.api({
        method:'GET',
        url:'/user/joao',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(404)
                          
    })
});
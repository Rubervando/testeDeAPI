it('Teste de Criação', () => {
    cy.api({
        method:'POST',
        url:'user',
        failOnStatusCode: false,
        body:{
            
            "id": 100,
            "username": "API",
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
it('Teste de Validação que existe o usuario', () => {
    cy.api({
        method:'GET',
        url:'/user/API',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.username).to.eq("API")
            expect(response.body.firstName).to.eq("teste")
            expect(response.body.lastName).to.eq("postman")
            expect(response.body.email).to.eq("testedeapi@post.com")
            expect(response.body.password).to.eq("tutorial")
            expect(response.body.phone).to.eq("85 88998899")
        
              
    })
});
it('Teste de motificação de nome do usuario', () => {
    cy.api({
        method:'PUT',
        url:'/user/API',
        failOnStatusCode: false,
        body:{
            
            "id": 100,
            "username": "Visual",
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
it('Teste de Validação se continua existindo o usuario antigo', () => {
    cy.api({
        method:'GET',
        url:'/user/API',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(404)
            
        
        })
});
it('Teste de Validação do novo usuario', () => {
    cy.api({
        method:'GET',
        url:'/user/Visual',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.username).to.eq("Visual")
            expect(response.body.firstName).to.eq("teste")
            expect(response.body.lastName).to.eq("postman")
            expect(response.body.email).to.eq("testedeapi@post.com")
            expect(response.body.password).to.eq("tutorial")
            expect(response.body.phone).to.eq("85 88998899")
        
              
    })
});
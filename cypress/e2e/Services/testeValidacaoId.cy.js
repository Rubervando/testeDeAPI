

it('Teste de Criação validação de Id 100', () => {
    cy.api({
        method:'POST',
        url:'user',
        failOnStatusCode: false,
        body:{
            
            "id": 100,
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
it('Teste de Criação validação de Id 200', () => {
    cy.api({
        method:'POST',
        url:'user',
        failOnStatusCode: false,
        body:{
            
            "id": 200,
            "username": "joao2",
            "firstName": "teste2",
            "lastName": "post",
            "email": "teste@post.com",
            "password": "xiome",
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
            expect(response.body.id).to.eq(100)
            expect(response.body.username).to.eq("joao")
            expect(response.body.firstName).to.eq("teste")
            expect(response.body.lastName).to.eq("postman")
            expect(response.body.email).to.eq("testedeapi@post.com")
            expect(response.body.password).to.eq("tutorial")
            expect(response.body.phone).to.eq("85 88998899")
        
              
    })
});
it('Teste de Validação do novo usuario', () => {
    cy.api({
        method:'GET',
        url:'/user/joao2',
        failOnStatusCode: false,
        body:{
            
        }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(200)
            expect(response.body.username).to.eq("joao2")
            expect(response.body.firstName).to.eq("teste2")
            expect(response.body.lastName).to.eq("post")
            expect(response.body.email).to.eq("teste@post.com")
            expect(response.body.password).to.eq("xiome")
            expect(response.body.phone).to.eq("85 88998899")
        
              
    })
});

// Questao 1 - Uso do for in, for of
// Imagine que estamos trabalhando em uma tarefa em que precisamos enviar a lista de usuários logados no sistema para o nosso backend
// Nos ja temos uma funcao nativa no sistema que nos retorna a lista de usuarios logados, a funcao se chama getLoggedUsers.
// Usando o for in e for of, crie uma funcao que salve somente o valor de email dos usuarios em um novo array 

const getLoggedUsers = () => {
    return [{
        name: 'Gabriel',
        email: 'gabriel@gmail.com'
    }, {
        name: 'Joao',
        email: 'joao@gmail.com'
    }]
}

const listOfLoggedUsers = []
const myUsers = getLoggedUsers()

for (const user of myUsers) {
    for (const key in user) {
        if (key === 'email') {
            listOfLoggedUsers.push(user[key])
        }
    }
}

console.log(listOfLoggedUsers)
// 1 - Crie uma agenda de contatos que armazene 6 contatos em um array, modelando o "contato" como um objeto.
//O modelo de contato deve ter as seguintes informacoes: (nome, sobrenome, telFixo, celular)

// const contacts = [
//   {
//     name: "",
//     surname: "",
//     "fixed phone": "",
//     phone: "",
//   },
//   {
//     name: "",
//     surname: "",
//     "fixed phone": "",
//     phone: "",
//   }
// ];

// function addUser (name, lastname, fixedPhone, phone) {
//     return {
//         name,
//         lastname, 
//         fixedPhone, 
//         phone
//     }
// }

// const userOne = new addUser (`Mateus`, `Souza`, 9999999, 88888)
// console.log(userOne)

// 2 - Imagine que estejamos criando uma tela para cadastro de usuários para um sistema. Imagine que nesse sistema, podemos fazer o
// cadastro de usuários em lote, ou seja, a partir de uma tela, podemos cadastrar diversos usuários. Crie um algoritmo com uma funcao
// que, adicione um novo usuario a uma lista de usuarios e faca a insercao de 5 novos usuarios. Cada usuário deve ter as seguintes
// informacoes: (nome, sobrenome, email, idade, é administrador?)

let usuariosCadastrados = [
    {
        name: `mateus_correia`,
        lastName: `Oliveira`,
        email: `karine.dev@gmail.com`,
        age: 28,
        administrator: false
    }
]
const newUsers = [
    {
        name: `Mateus`,
        lastName: `Correia`,
        email: `mateuscorreia.dev@gmail.com`,
        age: 31,
        administrator: true
    },    
    {
        name: `Fulana`,
        lastName: `Souza`,
        email: `fulana.dev@gmail.com`,
        age: 30,
        administrator: false
    },    
    {
        name: `Isa`,
        lastName: `Oliveira`,
        email: `isa.dev@gmail.com`,
        age: 29,
        administrator: false
    },
    {
        name: `Karine`,
        lastName: `Oliveira`,
        email: `karine.dev@gmail.com`,
        age: 28,
        administrator: false
    }    
]

// usuariosCadastrados = newUsers.map(({name, lastName, email, age, administrator}) => {
//     return {name, lastName, email, age, administrator}
// })

function addNewUsers (array) {
    array.forEach(item => {
        usuariosCadastrados.push(item)
    })
}

addNewUsers(newUsers)

console.log("Retorno do exercicio 02:", usuariosCadastrados)

// 3 - Melhore o algoritmo da questao 3 fazendo a validacao dos tipos de campos, por exemplo: o campo nome deve ser uma string, e assim
// por diante.

// const finalListRef = newUsers.map(({name, lastName, email, administrator}) => {
//     if (typeof name === 'string' && typeof lastName === 'string' && typeof lastName === 'string' && typeof administrator === 'boolean') {
//         return {name, lastName, email, administrator}
//     }
// })

// console.log("Retorno do exercicio 03:", finalListRef)

// 4 - Melhore o algoritmo da questao 3, impedindo que seja cadastrado um usuario com um email duplicado

// const finalListRefDup = (array, propArr) => {
//     if (array.filter(element))
//     newUsers.map(({name, lastName, email, administrator}) => {
//     if (typeof name === 'string' && typeof lastName === 'string' && typeof lastName === 'string' && typeof administrator === 'booelan') {
//         return {name, lastName, email, administrator}
//     }
// })
// }

// console.log("Retorno do exercicio 04:", finalListRefDup)


// 5 - Agora imagine que estejamos criando a tela de edicao de usuario, crie uma funcao que faca a edicao de um usuario de acordo
// com o email cadastrado.

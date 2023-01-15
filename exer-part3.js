// 1 - Crie uma agenda de contatos que armazene 6 contatos em um array, modelando o "contato" como um objeto.
//O modelo de contato deve ter as seguintes informacoes: (nome, sobrenome, telFixo, celular)

const contacts = [
  {
    name: "",
    surname: "",
    "fixed phone": "",
    phone: "",
  },
  {
    name: "",
    surname: "",
    "fixed phone": "",
    phone: "",
  }
];

function addUser (name, lastname, fixedPhone, phone) {
    return {
        name,
        lastname, 
        fixedPhone, 
        phone
    }
}

const userOne = new addUser (`Mateus`, `Souza`, 9999999, 88888)
console.log(userOne)

// 2 - Imagine que estejamos criando uma tela para cadastro de usuários para um sistema. Imagine que nesse sistema, podemos fazer o
// cadastro de usuários em lote, ou seja, a partir de uma tela, podemos cadastrar diversos usuários. Crie um algoritmo com uma funcao
// que, adicione um novo usuario a uma lista de usuarios e faca a insercao de 5 novos usuarios. Cada usuário deve ter as seguintes
// informacoes: (nome, sobrenome, email, idade, é administrador?)

let users = [
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
        users.push(item)
    })
}

addNewUsers(newUsers)

console.log("Retorno do exercicio 02:", users)

// 3 - Melhore o algoritmo da questao 3 fazendo a validacao dos tipos de campos, por exemplo: o campo nome deve ser uma string, e assim
// por diante.

userList = []

function addNewUsersValidate (name, lastName, teleFixo, phone) {
    if (typeof name !== 'string') {
        console.log('Nome inválido')
        return
    } if (typeof lastName !== 'string') {
        console.log('Nome inválido')
        return
    } if (typeof teleFixo !== 'number') {
        console.log('Numero inválido')
        return
    } if (typeof phone !== 'number') {
        console.log('Numero inválido')
        return
    }
    return {
        name, lastName, teleFixo, phone
    }
}

const user1 = addNewUsersValidate('Souza', 'Correia', 999999, 888888)
const user2 = addNewUsersValidate('Isadora', 'Correia', 8888888, 999999)

userList.push(user1, user2)

console.log('Retorno do exercicio 03:', userList)

// 4 - Melhore o algoritmo da questao 3, impedindo que seja cadastrado um usuario com um email duplicado

function inserNewUser (newArray, oldArray) {
    newArray.forEach(item => {
        const user = oldArray.find(user => user.email === item.email)
        if (!user) {
            users.push(newArray)
        }
    }) 
}

inserNewUser(newUsers, users)

console.log("Retorno do exercicio 04:", users)


// 5 - Agora imagine que estejamos criando a tela de edicao de usuario, crie uma funcao que faca a edicao de um usuario de acordo
// com o email cadastrado.

function editUser (email, updatedUser) {
    position = 0;
    users.forEach((item, index) => {
        if (email === item.email) {
            position = index;
        }
    }) 
    users[position] = updatedUser
}

editUser('karine.dev@gmail.com', {
    name: 'Karine',
    lastName: 'Cor',
    email: 'karine.cor@gmail.com',
    age: 37,
    administrator: true
})

console.log('Retorno da questão 05:', users)
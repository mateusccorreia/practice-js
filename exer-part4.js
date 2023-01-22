// Explique o conceito de variável e constante 
    //  Variável armazena dados que podem ser alterados no código
    //  Constante são valores constantes que não podem ser alterados

// Quais são os tipos utilizados pelo javascript? ex: string...
//      String, number, float, objects, array

// Como funciona a conversão de tipos no javascript? Explique as duas formas e a diferenca entre elas (implicita e explicita)
//      1 forma: toString(1); //converte um número em uma string
//      2 forma: toNumber(“2”) //converte uma string em um number

// Defina o que é e para que serve uma funcao. 
//      Função é um bloco de código separado entre chaves que é utilizado para resolver um problema.

// Crie uma funcao que receba 2 parametros e retorne a media dos valores recebidos.
// function media (num1, num2) {
// return (num1 + num2) / 2
// }
// console.log(media(4,2))

// Defina o que é um algoritmo
//      Um algoritmo contém todo um passo a passo para executar uma determinada tarefa, que deve ser finita. É como uma receita de bolo.

// Como podemos mudar o "fluxo" de um algoritmo, ou seja, mudar o caminho do algoritmo de acordo com determinada situacao? Ex, caso
//      Podemos alterar através de condições (if else por exemplo) onde programamos o código para ir para determinada tarefa se a condição for atendida.

// o valor inserido seja x, faca y, senao faca z. 

// O que sao lacos de repeticoes e para que serve?
    //lacos servem para repetir um determinado codigo por uma certa quantidade de vezes ou ate quando uma condicao for atendida

// O que e um array? Como podemos criar um array
    //array e uma lista de elementos, separados por virgula
    //estrutura para criar um array: arrayName = []

// Qual a diferenca de um array para um valor comum como: boleano, number, etc?
    //array é uma estrutura de dados
    // booleano e number sao tipos primitivos no JS

// Cite dois exemplos onde temos a necessidade de utilizar um array
    //quando precisamos criar uma lista e quando 

// Como podemos fazer a insercao de um dado em um array ? 
    //array.push()

// Que tipo de dados podemos inserir em um array ?
    //podemos inserir qualquer tipo de dado em um array

// Como podemos "percorrer" um array ? 
    //array[] usar o indice do elemento do array
    //usar o "for" para percorrer o array

// Crie um array com 5 nomes e percorra esse array, a cada iteracao, printe na tela o nome concatenado com a string 
// " - printando nome"

// const pessoas = ['Isa', 'Mateus', 'Karine', 'Oliveira', 'Souza']

// function imprimindoNomes (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log('Printando nome', arr[i])
//     }
// }

// imprimindoNomes(pessoas)

// Agora faca a mesma tarefa da questao anterior, agora isolando o comportamento em uma funcao 

// Define o que e um objeto e para que serve um objeto

// Qual as diferencas entre um objeto e um array
    //objetos tem propriedades/atributos e comportamentos. enquanto que array e apenas uma lista que pode ser iterada

// Como podemos acessar o valor de um atributo de um objeto 
    //atraves da sintaxe do ponto

// Crie um objeto que guarde a informacao de um produto. As informacoes deverao ser (id, nome, preco, qtdDisponivel, descricao). 
const produtos = [{
    id: 1111,
    nome: 'Teclado Gamer',
    preco: 10.00,
    qtdDisponivel: 3,
    descricao: 'Mouse gamer da empresa Ryzer'    
}, {
    id: 2222,
    nome: 'Mouse Gamer',
    preco: 10.00,
    qtdDisponivel: 3,
    descricao: 'Mouse gamer da empresa Ryzer'    
}, {   
    id: 3333,
    nome: 'Fone Gamer',
    preco: 10.00,
    qtdDisponivel: 3,
    descricao: 'Fone gamer da empresa Ryzer'    
}, {
    id: 4444,
    nome: 'Monitor Gamer',
    preco: 10.00,
    qtdDisponivel: 3,
    descricao: 'Monitor gamer da empresa Ryzer'    
}, {
    id: 5555,
    nome: 'PC Gamer',
    preco: 10.00,
    qtdDisponivel: 3,
    descricao: 'PC gamer da empresa Ryzer'    
}]

// function printObject (obj) {
//     obj.forEach(element => {
//         console.log(`Nome: ${element.nome} | Descrição: ${element.descricao}`)
//     });
// }

// printObject(produtos)
// Agora crie uma lista com 5 produtos, percorra a lista, e mostre em tela o nome e a descricao do produto 


// Agora crie uma funcao que recebera a posicao e o novo nome do produto. A funcao devera atualizar o nome do produto
// referente a posicao passada via parametro
function changeAttributeArray(arr, posicao, novoNomeObj) {
    arr.forEach(element => {
            if (element === arr[posicao]) {
                element.nome = novoNomeObj
            }
    })
}

changeAttributeArray(produtos, 4, 'Caneca da Isa')
console.log(produtos)

// Agora crie uma funcao que, faca a busca de um produto de acordo com o id de mesmo, e retorne o


// Crie uma funcao que faca a alteracao dos dados do produto de acordo com o id passado via parametro, a funcao devera receber
// os parametros (id, novoNome) e faca a alteracao do nome do produto de acordo com o id do produto

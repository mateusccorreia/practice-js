// 6 - Considere os arrays de nomes e idades e faca a ordenacao em order alfabetica no array de nomes e no array de idades 
 // em ordem do maior para o menor 
 
 const names = ['Daiane', 'Fabricio', 'Ana', 'Walter']
 const ages = [23, 18, 34, 20]

//Declarando novas variáveis
 const orderNames = names.sort();
 const orderAges = ages.sort();
 

 console.log(`Retorno do exercicio 06:`)
 console.log(orderNames)
 console.log(orderAges.reverse())

 // 7 - Crie um novo array que seja a juncao dos array de nomes e idades onde primeiro devera vir o nome e logo em seguida a idade
 // ex: ['Daiane', 23, 'Fabricio', 18 ...]

 const newArray = [] 

 function concatArray (array1, array2) {   
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i], array2[i]);        
    }
    return newArray;
 }

console.log(`Retorno do exercicio 07:`)
concatArray(names, ages) //chamada da funcao
console.log(newArray)

 // 8 - Considerando o array do exercicio 7, crie um novo array somente com os nomes e outro somente com as idades 

//Declarando novas variávéis
const arrayNames = [];
const arrayAges = [];

function filterArray (arr) {
    for (let i = 0; i < arr.length; i ++) {
        if (typeof arr[i] == 'number') {            
            arrayAges.push(arr[i])           
             } 
             if (typeof arr[i] == 'string') {
                arrayNames.push(arr[i])  
        }
    }
}

console.log(`Retorno do exercicio 08:`)
filterArray(newArray) //chamada da funcao
console.log(arrayNames);
console.log(arrayAges);

// 9 - Considerando os arrays criados no exercicio 8, busque o nome Fabricio e a idade 34 e salve-os em novas variaveis 

//Declarando novas variáveis
let armazenaNome = '';
let armazenaIdade = 0;

function search (name, idade) {
    for (let i = 0; i < arrayNames.length; i++) {
        if (name === arrayNames[i]) {
            armazenaNome = arrayNames[i];
        } if (idade === arrayAges[i]) {
            armazenaIdade = arrayAges[i];
        }
    }
    return;
}

console.log(`Retorno do exercicio 09:`)
search('Fabricio', 34) //chamada da funcao
console.log(armazenaNome)
console.log(armazenaIdade)
 
 // 10 - Considerando o array de idades calculado no exercicio 7, faca o somatorio total das idades contidas nesse array e salve em 
 // uma nova variavel 

 //declarando novas variaveis
 let somaIdades = 0;

 function somar (arrayQ) {
    for (let i = 0; i < arrayQ.length; i++) {
        somaIdades += arrayQ[i]
    }
    return
 }

 console.log(`Retorno do exercicio 10:`)
 somar(orderAges) //chamada da funcao
 console.log(somaIdades)

 // 11 - Considerando o array de idades calculado no exercicio 7, dobre o valor de cada item do array e salve em um novo array chamado
 // idades duplicadas

 //declarando variaveis
 const duplicateAges = [];

 function duAges (arrayD) {
    for (let i = 0; i < arrayD.length; i++) {
        duplicateAges.push(arrayD[i] * 2)
    }
    return
 }

 console.log(`Retorno do exercicio 11:`)
 duAges(orderAges) //chamada da funcao
 console.log(duplicateAges)


 // 12 - Crie uma funcao que impeca que um nome duplicado seja adicionado ao array de nomes

 function stopAdd (arrayI, name) {
    if (arrayI.includes(name)) {
        console.log(`Esse nome já existe na lista`);
    } else {
        arrayI.push(name);
        console.log(`Nome inserido na lista com sucesso`)
    }
    return
 }

 console.log(`Retorno do exercicio 12:`)
 stopAdd(names, 'Ana') //chamada da funcao
 console.log(names)

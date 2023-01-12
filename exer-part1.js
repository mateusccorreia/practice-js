 // 1 - Caso o valor total do pedido seja maior que 150 reais, devemos  adicionar uma nova tag no array de tags. A 
 // tag que deve ser adicionada e a seguinte: 'order-bigger-than-150', caso contrario, devera ser adicionado a tag 
 // 'order-less-or-equal-than-150'

// Insercao e remocao em listas 

 //array de tags 
 const tags = ['order'];
 const itemsValue = [10, 56.8, 32.2, 12];
 
// function somarItens(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     return total;
//  } 

//  const valorPedido = somarItens(itemsValue)
//  console.log(valorPedido)

//  if (valorPedido > 150) {
//     tags.push(' order-bigger-than-150');
//  } else {
//     tags.push(' order-less-or-equal-than-150');
//  }

// console.log(`Valor total do pedido: R$ ${valorPedido}`)
// console.log(`Novo array de tags: ${tags}`)

// --RESOLVENDO COM FUNCAO ANONIMA--
const somarItens = function (array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(somarItens(itemsValue))

 if (somarItens(itemsValue) > 150) {
    tags.push('order-bigger-than-150');
 } else {
    tags.push('order-less-or-equal-than-150');
 }

 console.log(tags)
 
// 2 - Considere as informacoes do exercicio anterior para a execucao desse segundo exercicio. Imagine que o usuario
// tenha adicionado mais um pedido no valor de 40 reais a sacola. Adicione o valor do item e faca a mesma operacao que 
// foi feita no exercicio anterior 

itemsValue.push(40)
console.log(itemsValue)
console.log(somarItens(itemsValue))

if (somarItens(itemsValue) > 150) {
    tags.push('order-bigger-than-150');
 } else {
    tags.push('order-less-or-equal-than-150');
 }
 console.log(tags)

// 3 - O seu gestor trouxe uma nova demanda cuja a necessidade e de rastrear as paginas acessadas pelo usuario e guardar em 
// uma lista. Como voce faria pra ir guardando pagina a pagina na lista a medida que o usuario for acessando?

 const listPage = [];

 // - Usuario acessou a 'pagina-inicial'
  // adicione a lista 
 // - Usuario acessou a 'pagina-de-produtos'
  // adicione a lista 
 // - Usuario acessou a 'pagina-de-checkout'
   // adicione a lista 
 // - Usuario acessou a 'pagina-inicial'
   // adicione a lista 

listPage.push('pagina-inicial')
listPage.push('pagina-de-produtos')
listPage.push('pagina-de-checkout')
listPage.push('pagina-inicial')

console.log(`Array de lista de acesso`, listPage)
 
 // 4 - Considere array da questao 4. Como voce faria para ir removendo item a item da lista na ordem do ultimo ate o 
 // primeiro inserido?

 console.log(`resultado da questao 4:`)
 while (listPage != 0) {
   listPage.pop();
   console.log(listPage)
 }

 // 5 - Considere array da questao 4. Como voce faria para ir removendo item a item da lista na ordem do primeiro ate o 
 // ultimo inserido? 

 console.log(`resultado da questao 5:`)
 while (listPage != 0) {
   listPage.shift();
   console.log(listPage)
 }
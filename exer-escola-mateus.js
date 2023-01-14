// Considere o array de objetos 'alunos' que contem as informacoes dos alunos de uma escola do ensino médio
// Esta no final do ano e os alunos ja fizeram todas as provas dos 4 bimestres do ano letivo e voce esta
// desenvolvendo a tela do sistema da escola onde os alunos irao acessar para saber em qual dos casos eles 
// se encontram: passou direto, reprovado direto, recuperacao final
// de acordo com as regras abaixo, escreva o algorimo que calcule e separe corretamente cada aluno 
// no respectivo array: alunosRecuperacaoFinal, alunosPassaramDireto, alunosReprovados. 
// devera ser inserido um objeto com as informacoes do aluno como: nome, media, percentual. 
// As regras sao as
// se tiver 80% ou mais de presenca e media maior ou igual a 7 -> passou direto 
// se tiver menos de 80% de presenca e nota maior ou igual a 7 ou 
// 80% ou mais de presenca e nota inferior a 7 -> prova de recuperacao final 
// se tiver menos que 80% de presenca e nota menor que 7 -> reprovado direto 
// a quantidade total de aulas dadas no ano e de 240 aulas

//Variavel global
const totalAulas = 240

const alunosRecuperacaoFinal = [];
const alunosPassaramDireto = [];
const alunosReprovados = [];

const alunos = [{
    nome: 'Fábio',
     n1: 7,
     n2: 5, 
     n3: 9,
     n4: 4,
     p: 120,
}, {
    nome: 'Bruna',
    n1: 7,
    n2: 8, 
    n3: 9,
    n4: 10,
    p: 200,
}, {
    nome: 'Carla',
    n1: 2,
    n2: 5, 
    n3: 8,
    n4: 10,
    p: 200,
}, {
    nome: 'Keilla',
    n1: 7,
    n2: 6, 
    n3: 8,
    n4: 10,
    p: 45,
}, {
    nome: 'Marcos',
    n1: 5,
    n2: 7, 
    n3: 4,
    n4: 8,
    p: 130,
}, {
   nome: 'Ana',
   n1: 10,
   n2: 10, 
   n3: 3,
   n4: 2,
   p: 221,
}, {
   nome: 'Thiago',
   n1: 1,
   n2: 3, 
   n3: 3,
   n4: 9,
   p: 240,
}, {
   nome: 'Athos',
   n1: 1,
   n2: 4, 
   n3: 4,
   n4: 5,
   p: 50,
}]

//Metodo para calcular a porcetagem da presenca
const calcPorcPresenca = function (presencaAluno) {
    const porcPresenca = (presencaAluno / totalAulas) * 100;
    return porcPresenca
}

//Metodo para calcular a media do aluno
const calcMediaAlunos = function (aluno = {n1, n2, n3, n4}) {
    const media = (aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4) / 4
    return media
}

//Metodo para definir em que lista o aluno ficou
function calcAprovacaoAluno (aluno) {
    for (let i = 0; i < aluno.length; i++) {
        if (calcPorcPresenca(aluno[i].p) >= 80 && calcMediaAlunos(aluno[i]) >= 7)  {
            alunosPassaramDireto.push(`Nome: ${aluno[i].nome}, Media: ${calcMediaAlunos(aluno[i])}`);
        }
        if (calcPorcPresenca(aluno[i].p) < 80 && calcMediaAlunos(aluno[i]) >= 7 || calcPorcPresenca(aluno[i].p) >= 80 && calcMediaAlunos(aluno[i]) < 7) {
            alunosRecuperacaoFinal.push(`Nome: ${aluno[i].nome}, Media: ${calcMediaAlunos(aluno[i])}`);
        }
        if (calcPorcPresenca(aluno[i].p) < 80 && calcMediaAlunos(aluno[i]) < 7) {
            alunosReprovados.push(`Nome: ${aluno[i].nome}, Media: ${calcMediaAlunos(aluno[i])}`)
        }
    }
    return
}

//Chamada da funcao do calculo de aprovacao
calcAprovacaoAluno(alunos)

//Imprimindo o resultado na tela
console.log("Alunos Passaram Direto: ", alunosPassaramDireto)
console.log("Alunos Recuperação Final: ", alunosRecuperacaoFinal)
console.log("Alunos Reprovados: ", alunosReprovados)

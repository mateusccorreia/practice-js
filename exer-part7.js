const filmesTeste = [
    {
        nome: "Harry Potter",
        genero: "Fantasia"
    },
    {
        nome: "Tropa de Elite",
        genero: "Ação"
    },
    {
        nome: "Vingadores",
        genero: "Ação"
    },
    {
        nome: "O Hobbit",
        genero: "Fantasia"
    },
    {
        nome: "Narnia",
        genero: "Fantasia"
    },
    {
        nome: "Senhor dos Aneis",
        genero: "Fantasia"
    }
    ]
    
    
    function contaFilmes(genero,filmes){
        let contador = 0;
        const filmesPorCategoria = filmes.filter(item => {
            if(item.genero === genero){
                contador++;
            }
        });
        
        return contador;
        
    }
    
    console.log(contaFilmes("Ação",filmesTeste));

    const filmes = [
        {
            nome: "Harry Potter",
            genero: "Fantasia"
        },
        {
            nome: "Tropa de Elite",
            genero: "Ação"
        },
        {
            nome: "Vingadores",
            genero: "Ação"
        },
        {
            nome: "O Hobbit",
            genero: "Fantasia"
        },
        {
            nome: "Narnia",
            genero: "Fantasia"
        },
        {
            nome: "Senhor dos Aneis",
            genero: "Fantasia"
        }
        ]
        
        function contaFilmes(genero,filmes){
            const filmesPorCategoria = filmes.reduce((acumulador,itemAtual)=>{
                if (itemAtual.genero === genero){
                    acumulador++;
                }
                return acumulador;
            },0);
            
            return filmesPorCategoria;
        }
        
        console.log(contaFilmes("Ação",filmes));

        const arr = [40,32,17,76];

function concatena(arr){
    const concatenado = arr.reduce((acumulador,itemAtual)=>{
        const virouTexto = itemAtual.toString();
        acumulador += virouTexto;
        return acumulador;
    })
    return concatenado;
}

console.log(concatena(arr));

const numero = 25.01;

let resposta;

switch (numero){
    case numero >= 0 && numero <= 25:
        resposta = "Intervalo [0,25]";
        break;
    case numero > 25 && numero <= 50:
        resposta = "Intervalo (25,50]";
        console.log("entrou aqui");
        break;
    case numero > 50 && numero <= 75:
        resposta = "Intervalo (50,75]";
        break;
    case numero > 75 && numero <= 100:
        resposta = "Intervalo (75,100]";
        break;
    default:
        resposta = "Fora de intervalo";
}

console.log(resposta);
/*7. Mapeamento e Ordenação 
Dado  um  array  produtos  =  [{  nome,  preco  },  ...],  crie  uma  função  que 
retorne  um  novo  array  apenas  com  os  nomes,  ordenados  por  preço 
crescente, usando map, sort.*/

let produtos = [{nome:"Placa de Video", preco:2500},
            {nome:"Videogame", preco:4000},
            {nome:"Jogo", preco:150},
            {nome:"Celular", preco:1500}
]

//Recebe um array e retorna um novo array em ordem crescente baseado no preço
function ordemCrescente(array) {
    return array.sort((x, y) => x.preco-y.preco) //organiza o array em ordem crescente
                    .map((x) => x.nome) //seleciona apenas o nome e retorna como um novo array
}

console.log('7. Mapeamento e Ordenação: Dado  um  array  produtos  =  [{  nome,  preco  },  ...],  crie  uma  função  que retorne  um  novo  array  apenas  com  os  nomes,  ordenados  por  preço crescente, usando map, sort.')

let produtosEmOrdemCrescente = ordemCrescente(produtos)
console.table(produtosEmOrdemCrescente)
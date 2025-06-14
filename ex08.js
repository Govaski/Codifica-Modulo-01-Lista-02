/* 8. Agrupamento por Propriedade 
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde 
cada chave é um cliente e o valor é a soma de todos os seus total.*/

let vendas = [{cliente: "João", total: 5}, {cliente: "Paulo", total: 10}, {cliente: "Maria", total: 15},
            {cliente: "Maria", total: 7}, {cliente: "Paulo", total: 9}, {cliente: "João", total: 3},
            {cliente: "Paulo", total: 6}, {cliente: "Maria", total: 4}, {cliente: "João", total: 9}
        ]
    
let vendasResumidas = vendas.reduce((acc, venda) => {
    //se nao existir no objeto um index do cliente, crie um novo index
    if (!acc[venda.cliente]) {
        acc[venda.cliente] = venda.total
    } else {
        //some ao total do index do cliente
        acc[venda.cliente] += venda.total
    }
    return acc 
}, {})

console.log('8. Agrupamento por Propriedade: Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.')

console.table(vendasResumidas)


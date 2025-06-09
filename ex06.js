/*
6. Memoization 
Implemente function memoize(fn) que armazene em cache chamadas 
anteriores de fn (por argumentos), retornando resultados instantâneos em 
repetidas invocações.
*/

//essa função salva em um cache os resultados de uma função pura
//ou seja, os mesmos inputs são iguais aos mesmos outputs
//Portanto, é possivel otimizar pre calculando os resultados dos inputs
function memoize(fn) {
    //cria uma variavel de cache. Map() é uma estrutura de dados que salva em chave:valor
    const cache = new Map()

    //retorna uma funcao anonima com N parametros
    return function(...args) {
        //transforma os args de Json para string
        const key = JSON.stringify(args)
        
        //se o cache ja possui a chave:valor do calculo, retorne o valor 
        if(cache.has(key)){
            return cache.get(key)
        }

        //Se não, o result recebe o retorno da função chamada (com apply) usando os parametros (args)
        const result = fn.apply(this, args)
        //salva a chave:valor do calculo no cache
        cache.set(key, result)
        //retorna o result
        return result
    }
}

const fastFact = memoize(function factorial(n) {
    if (n < 0) return console.error(Error("Numero menor que 0"))
    if(n === 0) return 1
    return n * fastFact(n-1)
})

console.log(fastFact(170))
console.log(fastFact(170))
/*
4. Fatorial Recursivo 
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando 
um Error, e n === 0 retornando 1. 
*/

function fatorial(n){
    if (n < 0) return console.error(Error("Numero menor que 0"))
    if(n === 0) return 1
    return n * fatorial(n-1)
}

console.log(`Fatorial de 5: ${fatorial(5)}`)
console.log(`Fatorial de 6: ${fatorial(6)}`)
console.log(`Fatorial de 7: ${fatorial(7)}`)


let prompt = require("prompt-sync")()

console.log('4. Fatorial Recursivo: Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.')

console.log("Deseja testar o fatorial de -1 e retornar um erro? (s/n)")
if (prompt() === "s") {
    console.log(`Fatorial de -1: ${fatorial(-1)}`)
}
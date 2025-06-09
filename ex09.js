/* 9. Conversão Entre Formatos 
Escreva duas funções: 
○  paresParaObjeto(pares) recebe um array de pares [ [chave, 
valor], ... ] e retorna o objeto equivalente. 
○  objetoParaPares(obj)  faz  o  inverso,  retornando  um  array  de 
pares. */

let array = [["a", 1], ['b', 2], ['c', 3]]

function paresParaObjeto(pares) {
    let obj = {}             //cria um objeto vazio
    pares.forEach(par => {   //para cada par dentro de pares
        obj[par[0]] = par[1] //insira no objeto a chave: valor referente ao par
    });
    return obj               //retorne o objeto
}

function objetoParaPares(obj) {
    let arr = []                   //crie um array vazio
    for (const key in obj) {       //para cada chave dentro do objeto
        arr.push([key, obj[key]])  //insira no array um novo array [chave, valor]
    }    
    return arr                     //retorne o array
}

console.log("Original: ", array)
let arrParaObj = paresParaObjeto(array)
console.log("Conversão para objeto: ", arrParaObj)
console.log("Conversão para pares: ", objetoParaPares(arrParaObj))

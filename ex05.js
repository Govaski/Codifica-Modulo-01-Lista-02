/*
5. Debounce 
Crie function debounce(fn, delay) que receba uma função fn e um delay 
em ms, retornando uma nova função que só executa fn se não for 
chamada novamente dentro do intervalo. 
*/

function debounce(fn, delay) {
    let timer 
    return function() {
        clearTimeout(timer) 
        timer = setTimeout(fn(), delay)
    }
}

function hello(){
    console.log("Hello, World!")
}

console.log("Chamando 100x uma função com debounce de 10ms de delay")
let callback = hello()
for (let i = 0; i < 100; i++) {
    debounce(callback, 10)
}

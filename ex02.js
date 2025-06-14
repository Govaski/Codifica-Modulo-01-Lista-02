/*
2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

let prompt = require("prompt-sync")()

let tries = 1
let answer = Math.floor(Math.random() * (100 - 1 + 1)) + 1
let guess = Number(prompt(`${tries} - Digite seu palpite: `))

while (guess != answer) {
    tries++
    if (answer - guess < 0) console.log("Mais baixo")
    else if (answer - guess > 0) console.log("Mais alto")
    guess = Number(prompt(`${tries} - Digite seu palpite: `))
} 

console.log('2. Jogo de Adivinhação: Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.')
console.log("Acertou! em apenas: ", tries, " tentativas")

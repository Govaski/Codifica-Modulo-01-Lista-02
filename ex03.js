/*
3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/

function uniqueWords (string) {
    //separa todas as palavras da string
    let split = string.split(' ')
    let words = [] 
    
    //para cada palavra dentro de split, verifica se ela é unica
    for (let i = 0; i < split.length; i++) {
        let unique = true
        words.forEach(word => {
            if (word === split[i]) unique = false
        });
        
        //se o state "unique" for verdadeiro, então adicione a palavra para o array 
        if(unique) words.push(split[i])
    }
    //retorna o array
    return words
}

console.log(uniqueWords("olá olá mundo mundo"))
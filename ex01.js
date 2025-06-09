/*
1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.
*/

function ehDataValida(dia, mes, ano) {
    let bissexto = false
    
    //verificar se é bissexto
    if ( ((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
        bissexto = true
    } 

    //verifica se o mes é menor ou igual a 12 e se é maior que 0, e se dia e maior que 0
    if ((mes <= 12 && mes > 0) && (dia > 0) ) {
        //verifica os meses de 31 dias
        if ((mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes == 12) 
            && (dia <= 31)) return true
        //verifica os meses de 30 dias
        else if((mes === 4 || mes === 6 || mes === 9 || mes === 11) 
            && (dia <= 30)) return true
        //verifica fevereiro
        else if((mes === 2 && !bissexto && dia <= 28) 
            || (mes === 2 && bissexto && dia <= 29)) return true
    }

    return false
}

console.log("Verificar se uma data é válida: ")
console.log("12/09/2007: ", ehDataValida(12, 9, 2007));
console.log("00/04/2025: ", ehDataValida(0, 4, 2025));
console.log("31/09/2025: ", ehDataValida(31, 9, 2025));
console.log("32/07/2025: ", ehDataValida(32, 7, 2025));
console.log("25/00/2025: ", ehDataValida(25, 0, 2025));

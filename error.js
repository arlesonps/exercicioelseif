// const readline = require('readline-sync');
// let numero = readline.questionInt("Digite um número: ");
// try {
//     if (numero === 0) {
//         throw "Valor Negado";
//     }
//     let result = 1 / numero;  
//     console.log(result); 
//     } catch (erro) {
//     console.log("[Erro:] Divisão por zero");
//     }

const readline = require('readline-sync');
try {
    const input = readline.question("Digite uma string não numerica"); // receba entrada o usuario.
    const number = parseInt(input); // Tenta converter  a entrada para número.
     if ((isNaN)(number)){
        throw new Error("Conversão inválida"); //Lança um erro personalizado.
     }
     console.log(number);
} catch (error) {
    console.log("Erro:", error.message);
}



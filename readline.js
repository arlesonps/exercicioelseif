// const readline = require('readline-sync');
// var nomeAluno = readline.question("Digite o nome do aluno: ");
// let nota1= parseFloat(readline.question("Digite a primeira nota: "));
// let nota2= parseFloat(readline.question("Digite a segunda nota: "));
// let nota3= parseFloat(readline.question("Digite a terceira nota: "));
// var media = (nota1 + nota2 + nota3) / 3;

// console.log("Nome do aluno: " + nomeAluno);
// console.log("Média de é: " + media.toFixed(2));



// const readline = require('readline-sync');
// var ano = parseInt(readline.question("Digite o ano: "));
// if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !==0)) {
//     console.log(ano + " é um ano bissexto.");
//  } else {
//   console.log(ano + " não é um ano bissexto");
//  }
    

// const readline = require('readline-sync');

// // Definir as taxas de impostos por estado
// const taxasDeImposto = {
//     "MG": 0.07,
//     "SP": 0.12,
//     "RJ": 0.15,
//     "MS": 0.08,
// };
// //  Solicitar valor do protuto

// var valorProduto = parseFloat(readline.question("Digite o valor do produto: "));
// var estadoDestino = readline.question("Digite estado destino(MG, SP, RJ, MS): ").toUpperCase();

// // Verificar se o estado é valido
// if (taxasDeImposto.hasOwnProperty(estadoDestino)){
//     var taxaImposto = taxasDeImposto[estadoDestino];
//     var precoFinal = valorProduto * (1 + taxaImposto);
//     console.log("Preço final do produto: R$" + precoFinal.toFixed(2));
// } else {
//     console.log("Estado inválido. Por Favor, digite estado válido");
// }

// const readline = require('readline-sync');
// var soma = 0
// for (var i = 2; i <= 100; i += 2) {
//     soma += i;
// }

// console.log("Soma dos 50 primeiros numeros pares ( usando for): " + soma);

// const readline = require('readline-sync');

// var soma = 0;
// var i = 2;
// while ( i <= 100){
//     soma += i;
//     i += 2;
// }
// console.log("Soma dos 50 primeiros numeros pares ( usando while): " + soma);



// const readline = require('readline-sync');

// var soma = 0;
// var i = 2;
// do {
//     soma += i;
//     i += 2;
// } while ( i <= 100);

// console.log("Soma dos 50 primeiros numeros pares ( usando do-while): " + soma);
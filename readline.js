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

//  const readline = require('readline-sync');
//  var n = parseInt(readline.question("Digite um numero N: "));
//  var count = 0;
//  var num = 1;

//  while (count < n){
//     if (num % 2 !==0){
//         console.log(num);
//         count++;
//     }
//     num++;
//  }

// const readline = require('readline-sync');

// const diasTrabalhados = parseFloat(readline.question("Digite o numero de dias trabalhados: "));
// const valorDiario = 30.00;
// const salarioBruto = diasTrabalhados * valorDiario;
// const desconto = salarioBruto * 0.08;
// const salarioLiquido = salarioBruto - desconto;
//  console.log(`O valor liquido a ser  pago é R$ ${salarioLiquido.toFixed(2)}`);

// const readline = require('readline-sync');
// function formatarTempo(hora, minuto, segundo){
//     return `${hora}:${minuto}:${segundo}`;
// }
// const horaInicio = parseInt(readline.question('Digite a hora de ìnicio: '));
// const minutoInicio = parseInt(readline.question('Digite o minuto de ìnicio: '));
// const segundoInicio = parseInt(readline.question('Digite o segundo de ìnicio: '));

// const duracaoSegundos = parseInt(readline.question('Digite a duração em segundos: '));

// const totalSegundosInicio = horaInicio * 3600 + minutoInicio * 60 + segundoInicio;
// const totalSegundosTermino = totalSegundosInicio + duracaoSegundos;

// const horaTermino = Math.floor(totalSegundosTermino / 3600);
// const minutosTermino = Math.floor((totalSegundosTermino % 3600) / 60);
// const segundosTermino = totalSegundosTermino % 60;

// console.log(`O horário de termino da experciência será: ${formatarTempo(horaTermino, minutosTermino, segundosTermino)}`);


// const readline = require('readline-sync');

// const horasNormais = parseFloat(readline.question('Digite o total de horas normais trabalhadas: '));
// const horasExtras = parseFloat(readline.question('Digite o total de horas extras trabalhadas: '));

// const salarioHoraNormal = 10.00;
// const salarioHoraExtra = 15.00;
// const salarioAnual = (horasNormais * salarioHoraNormal) + (horasExtras * salarioHoraExtra);

// console.log(`O salário anual do trabalhador é R$ ${salarioAnual.toFixed(2)}.`);

// const readline = require('readline-sync');

// const numero1 = readline.questionInt('Digite o primeiro numero: ');
// const numero2 = readline.questionInt('Digite o segundo numero: ');
// const numero3 = readline.questionInt('Digite o terceiro numero: ');

// var numeros = [ numero1, numero2, numero3];
// numeros.sort(function(a,b) {
//     if (a>b) return 1;
//     if (a<b) return -1;
//     return 0;
// });
// console.log(numeros);

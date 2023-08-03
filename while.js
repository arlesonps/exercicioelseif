// let x = 1;

// while (x <= 10) {
//   console.log(x);
//   x++;
// }

// let soma = 0;
// let x = 1;

// while (x <= 100) {
//   soma += x;
//   x++;
// }

// console.log("soma dos números de 1 a 100:", soma);

// let contadorPares = 0;
// let i = 1;

// while (i <= 50) {
//   if (i % 2 === 0) {
//     contadorPares++;
//     console.log(i);
//   }
//   i++;
// }

// console.log("Total de números pares de 1 a 50:", contadorPares);

// let numero = 1;
// let resultado = numero;

// while (resultado <= 1000) {
//   resultado = numero * 2;
//   numero = resultado;
// }

// console.log("O número final é:", numero);

// function isPrimo(numero) {
//     if (numero <= 1) {
//       return false;
//     }
  
//     let divisor = 2;
  
//     while (divisor * divisor <= numero) {
//       if (numero % divisor === 0) {
//         return false; // Encontrou um divisor, portanto não é primo
//       }
//       divisor++;
//     }
  
//     return true; // Se não encontrou divisores, é primo
//   }
  
//   // Teste para verificar se o número 23 é primo
//   const numeroTeste = 23;
//   if (isPrimo(numeroTeste)) {
//     console.log(numeroTeste + " é um número primo.");
//   } else {
//     console.log(numeroTeste + " não é um número primo.");
//   }
  
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const senhaCorreta = "1234";

// function verificarSenha() {
//   rl.question("Digite sua senha: ", function (senhaDigitada) {
//     if (senhaDigitada === senhaCorreta) {
//       console.log("Senha correta. Acesso concedido!");
//       rl.close();
//     } else {
//       console.log("Senha incorreta. Tente novamente.");
//       verificarSenha(); // Chama a função novamente para pedir a senha novamente.
//     }
//   });
// }

// verificarSenha(); // Inicializa o processo de verificação da senha.

// let number = 1;
// while (number <=30 ) {
//  if (number % 3 === 0) {
//     console.log(number);
//  }
//  number++;
// }

FileSystem
    
// Crie uma função recursiva chamada somaRecursiva que receba um numero inteiro positivo n como
// arguemento como argumento e calcule a soma de todos numeros inteiros de 1 até n.

// function somaRecursiva (n) {
//     if (n===0) {
//       return 0;
//     } else {
//       return n + somaRecursiva (n -1);
//     }
// }
// const numero = 20 // parseInt(require('readline-sync').question('Qual é o numero deseja saber a somatoria: \n'));
// console.log(` A somatoria de ${numero} é ${somaRecursiva(numero)}`);

function fibonacci(n){
    if (n <=1){
     return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }
  const numero = 8
  console.log(`${fibonacci(numero)}`);
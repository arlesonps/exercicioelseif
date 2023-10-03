// Exemplo 01: Função retorno e sem parametros
// function funcao01 () : void {
//     console.log("Minha primeria função");

import { CaseClause, CreateProgram } from "typescript";

    
//   }
//   funcao01();
  
  // Exemplo 02: Função com retorno e sem parametros
  
  // function funcao02 () : string {
  //   return "Minha segunda função";
  // }
  // console.log(funcao02());

  // exemplo 03: função sem retorno e com parametros

//   function funcao03(nome: string): void {
//     console.log('bom dia ' + nome);
//   }
//  funcao03('Arleson');
  
  // exempço 04: funçao com retonro e com parametros.

  // function funcao04(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  //   console.log(funcao04(10.1, 7.3));

  // Crie uma função chamada saudação que exiba a mensagem "Olá, mundo!" no console quando for chamada.

  // function saudacao(params: string) {
  //   console.log("Olá, mundo!");
    
  // }
  // saudacao("saudacao");

  // Escreva uma função chamada dobro que aceite um parametro num e exiba o dobro desse numero no console.

//   function dobro(num:number) {
//     return (num * 2); 
//   }
// console.log(dobro(7*2));

// Crie uma função chamada mostrarNumeros que receba dois parametros, inicio e fim. Essa função deve exibir todos numeros inteiros no intervalo de inicio a fim (inclusive) no console.
//  function mostrarNumeros(inicio: number, fim: number){
//   for (let i = inicio; i <= fim; i++) {
//   console.log(i);
  
//   }

//   }

//   mostrarNumeros(1, 100)

  // Escreva uma função chamda verificarPar que aceite um número como entrada e exiba no console se o numero é par ou nao.

  // function verificarPar(num: number) {
  //   if (num %2 == 0){
  //     console.log("o numero é par");
  //   } else {
  //     console.log(" o numero é impar.");
      
  //   } 
  // }

  // verificarPar(9)

  // Cria uma função chamada imprimirLista que aceite um array como parametro e exiba cada elemento desse array no console, um por um.
  
  function imprimirLista(lista: any[])
  
  {
    for ( let elemento of lista) {
      console.log(elemento);
      
    }
  }
  imprimirLista([1, 2, 3, 4, 5]);
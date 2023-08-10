// cria uma função chamada saudacao que aceita um parametro nome para uma pessoa e 
//exiba no console a saudaçao Olá, [nome] utilizando um valor padrao para nome 
//caso nenhum seja fornecido.


// function saudacao(nome = "amigo"){
//     console.log(`Olá, ${nome}!`);
// }

// saudacao("Arleson");

// escreva uma função chamada calculadora que receba dois números( num1 e num2)
// e um operador matematico (operacao) como parametros. A função deve realizar a operação matematica
// entre num1 e num 2 (por exemplo adição, subtração, multiplicação, divisao) com um valor padrão de operação sendo +.

// function calculadora(num1, num2, operacao='+'){
//     if (operacao === '+'){
//      return num1  + num2;
//     }else if (operacao === '-')
//     {
//       return num1  - num2;
//     }else if (operacao === '*')
//     {
//        return num1 * num2;
//     }else if (operacao === '/')
//         {
//          return num1 / num2;
//         }else {
//             return "operacao inválida";
//         }
// }    

// const resultadoSoma = calculadora (10,5);
// const resultadoMultiplicacao = calculadora(3, 4, '*');

// function contagemregressiva( inicio = 10){
//     for (let i= inicio; i >= 1; i--) {
//         console.log(i);
//     }
// }

// contagemregressiva();

// // Função apresentaçao
// function apresentacao(nome = "Arleson", idade = "34", profissao= "desenvolvedor"){
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
// }
// apresentacao();

// Função mensagempersonalizada
// function mensagempersonalizada(texto, estilo = "normal"){
//     switch (estilo){
//         case "normal":
//             console.log(texto);
//             break;
//         case "negrito":
//             console.log(`%c${texto}`, "font-weight: bold;");
//             break;
//         case "itálico":
//             console.log(`%c${texto}`, "font-style: italic;");
//             break;
//         default:
//             console.log(texto);
//     }
// }

// mensagempersonalizada("Arleson é lindo", "itálico");

// function criarmensagemdesaudacao(nome) {
//     const mensagem = `Hello,${nome}`;
//     return mensagem;
// }
// console.log(criarmensagemdesaudacao("Arleson"));


// // Função somar
// function somar(num1,num2){
//     return num1 + num2;
// }

// // Função ehPar
// function ehPar(numero){
//     return numero % 2 === 0;
// }

// // Função maiorNumero
// function maiorNumero(num1,num2,num3){
//     return Math.max(num1, num2,num3);
// }

// // Função calcularIMC
// function calcularIMC(peso, altura){
//     return peso / (altura*altura);
// }

// console.log(somar(5,5));
// console.log(ehPar(4));
// console.log(ehPar(7));
// console.log(maiorNumero(10,5,15));
// console.log(calcularIMC(92,1.76));

// Função contarVogais
function contarVogais(str) {
    const vogais = "aeiouAEIOU";
    let count = 0;
    for (let char of str){
        if (vogais.includes(char)){
            count++;
        }
    }
    return count;
}

// Função celsiusParaFahrenheit
function celsiusParaFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

// Função gerarSenha
function gerarSenha (tamanho) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let senha = "";
    for (let i = 0; i < tamanho; i++){
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(randomIndex);
    }
    return senha;
}


console.log(contarVogais("Hello World"));
console.log(celsiusParaFahrenheit(25));
console.log(gerarSenha(8));
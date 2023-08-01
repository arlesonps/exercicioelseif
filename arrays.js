const meuArray = [10,20,30,40,50];
const segundoElemento = meuArray[1];
console.log (segundoElemento);

const frutas = ['maça','banana','laranja','uva','manga'];
console.log(frutas.length)
frutas.push('pera');
console.log(frutas);
frutas.splice(0, 1);
console.log(frutas);
console.log(meuArray.includes(25));
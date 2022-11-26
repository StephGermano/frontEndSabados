// 1.  Faça um programa que entre com três números, faça a média aritmética e mostre o
// resultado.

let num1 = 1;
let num2 = 2;
let num3 = 3;
let media = (num1 + num2 + num3) / 3;

alert("A média é de : " + media);

let numeros = [1, 2, 3];

let total = 0;

for (let i = 0; i < numeros.length; i++) {
  total = numeros[i] + total;
}

alert(`A média é de ${total / numeros.length}`);

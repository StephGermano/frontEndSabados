// 9. Faça um programa que receba 10 números, calcule e imprima a soma dos números pares e a soma dos números primos.
let array = [2, 7, 5, 61, 12, 15, 71, 8, 92, 67, 3, 11, 13, 17, 19, 23, 29, 31];

let numerosPares = [];
let numerosPrimos = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    numerosPares.push(array[i]);
  }
}

for (let i = 0; i < array.length; i++) {
  if (
    array[i] === 2 ||
    array[i] === 3 ||
    array[i] === 5 ||
    array[i] === 7 ||
    (array[i] % 2 != 0 &&
      array[i] % 3 != 0 &&
      array[i] % 5 != 0 &&
      array[i] % 7 != 0 &&
      array[i] / 1 === array[i])
  ) {
    numerosPrimos.push(array[i]);
  }
}

let somaPares = 0;
for (let j = 0; j < numerosPares.length; j++) {
  somaPares = somaPares + numerosPares[j];
}

let somaPrimos = 0;
for (let k = 0; k < numerosPrimos.length; k++) {
  somaPrimos = somaPrimos + numerosPrimos[k];
}

alert(`Os números pares são ${numerosPares}
O total da soma é de ${somaPares}
===============================
Os números primos são ${numerosPrimos}
O total da soma é de ${somaPrimos}`);

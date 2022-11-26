// 6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
// a maior e a menor altura do grupo;
// a média de altura;
// o número de pessoas com mais de 1.81 de altura.
let alturas = [
  1.65, 1.75, 1.83, 1.89, 1.72, 1.68, 1.73, 1.79, 1.85, 1.69, 1.67, 1.75, 1.84,
  1.57, 1.91,
];

let maiorAltura = 0;
let menorAltura = alturas[0];
let somaMedia = 0;
let maior181 = [];

for (let i = 0; i < alturas.length; i++) {
  if (maiorAltura < alturas[i]) {
    maiorAltura = alturas[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if (menorAltura > alturas[i]) {
    menorAltura = alturas[i];
  }
}

for (let i = 0; i < alturas.length; i++) {
  if (menorAltura > alturas[i]) {
    menorAltura = alturas[i];
  }
}

for (let i = 0; i < alturas.length; i++) {
  somaMedia = somaMedia + alturas[i];
}

for (let i = 0; i < alturas.length; i++) {
  if (alturas[i] > 1.81) {
    maior181.push(alturas[i]);
  }
}

let mediaAltura = somaMedia / alturas.length;

alert(`
      A maior altura é ${maiorAltura}
      A menor altura é ${menorAltura}
      A média das alturas é de ${mediaAltura.toFixed(2)}
      A quantidade de pessoas maiores que 1.81 são de ${maior181.length} pessoas
      `);

// ===============================

// for (let i = 0; i < array.alturas; i++) {
//   const altura = alturas[i];

//   if(altura > maiorAltura){
//     maiorAltura = altura
//   }

//   if(menorAltura > altura){
//     menorAltura = altura
//   }

//   somaMedia += altura

// }

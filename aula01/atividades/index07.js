// 7. Cada espectador de um cinema respondeu a um questionário no qual
// constava sua idade e a sua opinião em relação ao filme:
// ótimo: 3
//  bom: 2
// regular: 1
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let pessoas = [
  { idade: 15, opiniao: "bom" },
  { idade: 27, opiniao: "regular" },
  { idade: 24, opiniao: "otimo" },
  { idade: 17, opiniao: "bom" },
  { idade: 19, opiniao: "bom" },
  { idade: 31, opiniao: "otimo" },
  { idade: 23, opiniao: "regular" },
  { idade: 29, opiniao: "regular" },
  { idade: 18, opiniao: "otimo" },
  { idade: 42, opiniao: "bom" },
  { idade: 41, opiniao: "regular" },
  { idade: 37, opiniao: "otimo" },
  { idade: 28, opiniao: "bom" },
  { idade: 16, opiniao: "regular" },
  { idade: 33, opiniao: "regular" },
];

let pessoasBom = pessoas.filter((pessoaBom) => {
  return pessoaBom.opiniao === "bom";
});

let porcentagem = (pessoasBom.length / pessoas.length) * 100;

let pessoasRegular = pessoas.filter((pessoaRegular) => {
  return pessoaRegular.opiniao === "regular";
});

let pessoasOtimo = pessoas.filter((pessoaOtimo) => {
  return pessoaOtimo.opiniao === "otimo";
});

let idadePessoasOtimo = pessoasOtimo.map((idadePessoasOtimo) => {
  return idadePessoasOtimo.idade;
});

let somaIdade = 0;

for (let i = 0; i < idadePessoasOtimo.length; i++) {
  somaIdade = somaIdade + idadePessoasOtimo[i];
}

console.log(
  `A média da idade das espectadores que responderam ótimo é de ${
    somaIdade / idadePessoasOtimo.length
  }`
);
console.log("===================");
console.log(
  `A quantidade de espectadores que responderam regular é de ${pessoasRegular.length}`
);
console.log("===================");
console.log(
  `A porcentagem de espectadores que responderam bom é de ${(
    (pessoasBom.length / pessoas.length) *
    100
  ).toFixed(2)}%`
);

// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

// =====================================

// let pesquisas = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

// let idades = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50];

// let totalOtimo = 0;
// let qtdOtimo = 0;

// for (let i = 0; i < pesquisas.length; i++) {
//   const pesquisa = pesquisas[i];
//   const idade = idades[i];

//   if (pesquisa == 3) {
//     totalOtimo += idade;
//     qtdOtimo++;
//   }
// }

// let mediaOtimo = totalOtimo / qtdOtimo;

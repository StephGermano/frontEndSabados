// 10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.

let pessoas = [
  { idade: 17, peso: 82.7, sexo: "M" },
  { idade: 15, peso: 52.9, sexo: "F" },
  { idade: 42, peso: 58.5, sexo: "F" },
  { idade: 36, peso: 70.3, sexo: "M" },
  { idade: 27, peso: 62.1, sexo: "M" },
  { idade: 53, peso: 102.1, sexo: "F" },
  { idade: 12, peso: 42.3, sexo: "M" },
  { idade: 7, peso: 36.9, sexo: "F" },
  { idade: 20, peso: 76.5, sexo: "M" },
  { idade: 30, peso: 62.5, sexo: "F" },
];
// ======= Homens ==============
let homens = pessoas.filter((homem) => {
  return homem.sexo === "M";
});

let idadeHomens = homens.map((idadeHomem) => {
  return idadeHomem.idade;
});

let somaIdadeHomens = 0;
for (let i = 0; i < idadeHomens.length; i++) {
  somaIdadeHomens = somaIdadeHomens + idadeHomens[i];
}

let mediaIdadeHomens = somaIdadeHomens / idadeHomens.length;

// ============ Mulheres ============

let mulheres = pessoas.filter((mulher) => {
  return mulher.sexo === "F";
});

let pesoMulheres = mulheres.map((pesoMulher) => {
  return pesoMulher.peso;
});

let somaPesoMulheres = 0;
for (let i = 0; i < pesoMulheres.length; i++) {
  somaPesoMulheres = somaPesoMulheres + pesoMulheres[i];
}

let mediaPesoMulheres = somaPesoMulheres / mulheres.length;

alert(`O número total de homens é de ${homens.length}`);
alert(`O número total de mulheres é de ${mulheres.length}`);
alert(`A média de idade entre os homens é de ${mediaIdadeHomens} anos`);
alert(`A média de peso das mulheres é de ${mediaPesoMulheres} kg`);

// 10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.

let idades = [24, 25, 62, 12, 47, 65, 45, 32, 45, 37];
let sexos = ["M", "F", "M", "F", "M", "F", "M", "F", "M", "F"];
let pesos = [71, 67, 70, 45, 58, 62, 65, 54, 59, 67];

let qtdHomens = 0;
let qtdMulheres = 0;
let somaIdadeH = 0;
let somaPesosM = 0;

for (let i = 0; i < idades.length; i++) {
  const idade = idades[i];
  const sexo = sexos[i];
  const peso = [i];

  if (sexo == "M") {
    somaIdadeH = mediaIdadeH + idade;
    qtdHomens++;
  }

  if (sexo == "F") {
    somaPesosM = somaPesosM + peso;
    qtdMulheres++;
  }
}

alert(`Quantidade de Homens: ${qtdHomens}
Quantidade de Mulheres: ${qtdMulheres}
Media de idade Homens: ${(somaIdadeH / qtdHomens) * 100}
Media de peso Mulheres: ${(somaPesosM / qtdMulheres) * 100} `);

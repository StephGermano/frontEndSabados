// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.

let nome = "Stepherson";
let nota1 = 7;
let nota2 = 7;
let nota3 = 8;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 8) {
  alert(`${nome} você foi aprovado com a média de: ${media.toFixed(2)}`);
} else {
  alert(`${nome} você foi reprovado com a média de: ${media.toFixed(2)}`);
}

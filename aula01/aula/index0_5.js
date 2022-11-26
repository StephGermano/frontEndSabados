// utilizar let ou const
// let -> pode ser alterado
// const -> é uma constante que não pode ser alterada

let email = "stephersongermano@gmail.com";

alert(email);

let primeiroNome = "Stepherson";
let segundoNome = "Germano";
let nomeCompleto = primeiroNome + " " + segundoNome;

alert(nomeCompleto);

// operadores -> mais "+" , menos "-", divisao "/", multiplicacao "*", divisão com sobra(saber se o numero é par) "%"

let divisao = 10 % 4;

const pi = 3.14;

// Bolleanos -> "true" or "false"
//  >
//  <
//  ==
//  !=
//  >=
//  <=

let maiorDeIdade = true;

if (maiorDeIdade) {
  alert("O usuario é maior de idade");
} else {
  alert("O usuario é menor de idade");
}

let idade = 17;

if (idade < 18) {
  alert("Menor de idade");
} else if (idade >= 60) {
  alert("Idoso");
} else {
  alert("Maior de idade");
}

// Comparação do tipo " === "
let comparacao = "4" == 4; // JS entende que é a mesma coisa, mesmo sendo String e Number
comparacao = "4" === 4; // JS da como falso, devido ser comparação de tipagem String != Numero

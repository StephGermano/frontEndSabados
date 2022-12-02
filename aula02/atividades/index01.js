//1 - Crie uma função que receba dois números como parâmetro,
// retorne a soma dos valres, em seguida execute a função
// mostrando na tela o seguinte texto: 'A soma dos valores é ${(resultado)}'

function soma(x, y) {
  let total = x + y;
  return total;
}

let resultado = soma(10, 20);

alert(`A soma dos valores é ${resultado}`);

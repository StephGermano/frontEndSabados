// 5- Crie uma função que receba um array de
// números (Valide os dados dentro do array, reaproveite
// a função criada no exercício 1) e depois calcule a média
// de todos os valores dentro do array. Execute a função mostrando
// na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function calculoMedia(array) {
  let soma = 0;
  let qtdElementos = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    soma = +element;
    qtdElementos++;
  }
  let media = soma / qtdElementos;

  return media;
}

let calculando = calculoMedia(numeros);

alert(`A média dos valores do array é ${calculando}`);

// 2- Crie uma função que receba um array de números
// (crie uma segunda função para validar os dados dentro do array) e
//  depois calcule a soma de  todos os valores dentro do array.
//   Execute a função mostrando na tela o seguinte
//   texto: 'A soma dos valores do array é ${(resultado)}'.

function arrayNumeros(array) {
  return array;
}

function somaArray(array) {
  let somaValores = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    somaValores += element;
  }

  return somaValores;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

alert(`A soma dos valores do array é ${somaArray(array)}`);

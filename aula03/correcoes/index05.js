// 5- Crie uma função que receba um array de
// números (Valide os dados dentro do array, reaproveite
// a função criada no exercício 1) e depois calcule a média
// de todos os valores dentro do array. Execute a função mostrando
// na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'.

function isNumerico(valor) {
  if (valor == "number") {
    return true;
  } else {
    return false;
  }
}

function calcularMedia(array) {
  let somaValores = 0;

  array.forEach((element) => {
    if (isNumerico(element)) {
      somaValores += element;
    } else {
      return "Erro";
    }
  });

  return somaValores / array.length;
}

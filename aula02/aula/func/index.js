function somarNumeros(x, y) {
  alert(x + y);
}

somarNumeros(10, 20);

function calcularMedia(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    total += element;
  }

  let resultado = total / array.length;

  return resultado;
}

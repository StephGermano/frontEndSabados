// 6- Neste exercício, temos um array composto de
// letras repetidas e uma letra isolada.
// Por exemplo, temos um array chamado vetor:
// let vetor = ["a", "b", "a", "a", "c", "b"]
// Aqui, temos:
//  vetor[0] = "a";
//  vetor[1] = "b";
//  vetor[2] = "a";
//  vetor[3] = "a";
//  vetor[4] = "c";
//  vetor[5] = "b";
// Sabemos que a única letra que não possui repetição está
//  na posição [4], elemento “c”. Então, crie uma função que retornar este elemento.

let array = ["a", "b", "a", "a", "c", "b"];

function elementReturn(array, posicao) {
  let vetor = array[posicao];

  return vetor;
}

let posicao4 = elementReturn(array, 4);

alert(`Vetor na posição 4 é " ${posicao4} "`);

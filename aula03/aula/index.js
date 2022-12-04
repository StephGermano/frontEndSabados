// let veiculo = {
//   cor: "branca",
//   marca: "audi",
//   modelo: "a4",
//   isLocado: true,
//   locatario: {
//     nome: "Stepherson",
//   },
//   ligar: () => {
//     alert(`O veiculo com placa ${veiculo.placa}
//     foi ligado pelo ${veiculo.locatario.nome}`);
//   },
// };

//Subir : não pode passar do andar maximo
//Descer : não pode passar do andar 0

//   pesoMaximo: 600,
//   pessoas: [
//     {
//       nome: "Stepherson",
//       peso: 78,
//     },
//   ],

let elevador = {
  andar: 0,
  andarMaximo: 10,
  subir: () => {
    if (elevador.andar < elevador.andarMaximo) {
      elevador.andar++;
      alert(`Você está no andar ${andarAtual()}`);
    } else {
      alert(`Você chegou ao ultimo andar`);
    }
  },
  descer: () => {
    if (elevador.andar == 0) {
      alert(`Você está no terreo`);
    } else {
      elevador.andar--;
      alert(`Você está no andar ${andarAtual()}`);
    }
  },
  andarAtual: () => {
    return elevador.andar;
  },
  qtsPessoas: 0,
  qtdMaximaPessoas: 0,
  adicionarPessoa: () => {},
  removerPessoa: () => {},
};

function descer() {
  elevador.descer();
}
function subir() {
  elevador.subir();
}

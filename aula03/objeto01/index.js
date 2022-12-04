// ⦁ Crie um programa de cadastro de veículos de uma loja
//  de seminovos (utilizando array como base de dados ex: baseDeAutomoveis: [ob1, obj2,]).
//  O programa deve implementar as funcionalidades descritas na figura abaixo:
// (1) - Cadastrar automóvel;
// (2) - Pesquisar automóvel;
// (3) - Excluir automóvel;
// (0) - Sair;

// dica: Crie uma função criarAutomovel(<informacoes>) que retorne um objeto automóvel

// O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação.

let baseDeVeiculos = [];

function apresentarMenu() {
  let valor = prompt(`
    (1) - Cadastrar automóvel;
    (2) - Pesquisar automóvel;
    (3) - Excluir automóvel;
    (5) - Alterar automóvel
    (0) - Sair;
    `);

  if (valor == 0) {
  }

  if (valor == 1) {
    cadastrar();
    apresentarMenu();
  }

  if (valor == 2) {
    pesquisar();
    apresentarMenu();
  }

  if (valor == 3) {
    exluir();
    apresentarMenu();
  }

  if (valor == 4) {
    alterar();
    apresentarMenu();
  }

  if (valor == 5) {
    alterar();
    apresentarMenu();
  }
}

// ⦁ Não se pode cadastrar uma placa previamente cadastrada;
function cadastrar() {
  let placa = prompt("placa");
  let possuiCadastro = false;
  baseDeVeiculos.forEach((v) => {
    if (v.placa == placa) {
      possuiCadastro = true;
    }
  });

  if (possuiCadastro) {
    alert(`Placa não pode ser cadastrada`);
  } else {
    let marca = prompt("marca");
    let modelo = prompt("modelo");
    let ano = prompt("ano");
    let veiculo = {
      marca,
      modelo,
      placa,
      ano,
    };
    baseDeVeiculos.push(veiculo);
    alert(`Veiculo cadastrado`);
  }
}

// ⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa;
function pesquisar() {
  let opcaoPesquisa = prompt(`
    Deseja pesquisar por qual opção?
    (1) - Placa
    (2) - Marca
    (3) - Modelo
    (4) - Voltar Menu Anterior
    `);
  if (opcaoPesquisa == 1) {
    placa();
    pesquisar();
  }

  if (opcaoPesquisa == 2) {
    marca();
    pesquisar();
  }

  if (opcaoPesquisa == 3) {
    modelo();
    pesquisar();
  }

  if (opcaoPesquisa == 4) {
    apresentarMenu();
  }

  function placa() {
    let pesquisaPlaca = prompt("informe a placa para pesquisa");
    let veiculoPesquisaPlaca = baseDeVeiculos.find(
      (veiculoPesquisaPlaca) => veiculoPesquisaPlaca.placa === pesquisaPlaca
    );

    if (veiculoPesquisaPlaca) {
      return alert(`
            Marca: ${veiculoPesquisaPlaca.marca}
            Modelo: ${veiculoPesquisaPlaca.modelo}
            Placa: ${veiculoPesquisaPlaca.placa}
            Ano: ${veiculoPesquisaPlaca.ano}
            `);
    } else {
      return alert(`Não existe veiculo com essa placa`);
    }
  }

  function marca() {
    let pesquisaMarca = prompt("informe a marca para pesquisa");

    let veiculosMarca = [];
    baseDeVeiculos.forEach((vMarca) => {
      if (vMarca.marca == pesquisaMarca) {
        veiculosMarca.push(vMarca);
      }
    });

    if (veiculosMarca.length > 0) {
      for (let i = 0; i < veiculosMarca.length; i++) {
        const resultMarca = veiculosMarca[i];
        alert(`
                Marca: ${resultMarca.marca}
                Modelo: ${resultMarca.modelo}
                Placa: ${resultMarca.placa}
                Ano: ${resultMarca.ano}
                `);
      }
    } else {
      alert(`Não consta nenhum veiculo dessa marca na base de dados`);
    }
    return;
  }

  function modelo() {
    let pesquisaModelo = prompt("informe a modelo para pesquisa");

    let veiculosModelo = [];
    baseDeVeiculos.forEach((vModelo) => {
      if (vModelo.modelo == pesquisaModelo) {
        veiculosModelo.push(vModelo);
      }
    });

    if (veiculosModelo.length > 0) {
      for (let i = 0; i < veiculosModelo.length; i++) {
        const resultModelo = veiculosModelo[i];
        alert(`
                Marca: ${resultModelo.marca}
                Modelo: ${resultModelo.modelo}
                Placa: ${resultModelo.placa}
                Ano: ${resultModelo.ano}
                `);
      }
    } else {
      alert(`Não consta nenhum veiculo dessa marca na base de dados`);
    }
    return;
  }
}

apresentarMenu();

// ⦁ A exclusão deve ser feita pela placa do veículo;
function exluir() {
  placaRemocao = prompt(`Digite a placa do veiculo que deseja excluir`);
  let veiculoExiste = false;
  baseDeVeiculos.forEach((vei) => {
    if (vei.placa == placaRemocao) {
      veiculoExiste = true;
    }
  });

  if (veiculoExiste) {
    for (let i = 0; i < baseDeVeiculos.length; i++) {
      const veiculo = baseDeVeiculos[i];

      if (placaRemocao == veiculo.placa) {
        baseDeVeiculos.splice(i, 1);
        alert(`Veiculo Removido`);
        break;
      }
    }
  } else {
    alert(`Não existe véiculo com essa placa cadastrada`);
  }
}

// ⦁ O usuário deve pesquisar um veículo pela placa para alterar o cadastro e só deve permitir alterar o modelo e marca;
function alterar() {}

// removendoArray
// array.splice(0,1) -> ("0") Posição para remoção // ("1") quantidade de remoção

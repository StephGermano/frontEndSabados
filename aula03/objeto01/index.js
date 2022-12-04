// ⦁ Crie um programa de cadastro de veículos de uma loja
//  de seminovos (utilizando array como base de dados ex: baseDeAutomoveis: [ob1, obj2,]).
//  O programa deve implementar as funcionalidades descritas na figura abaixo:
// (1) - Cadastrar automóvel;
// (2) - Pesquisar automóvel;
// (3) - Excluir automóvel;
// (0) - Sair;

// dica: Crie uma função criarAutomovel(<informacoes>) que retorne um objeto automóvel

// O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação.

let carsDatabase = [];

function menu() {
  let value = prompt(`
    (1) - Register Car;
    (2) - Search Car;
    (3) - Delete Car;
    (5) - Change Car;
    (0) - Exit;
    `);

  if (value == 0) {
  }

  if (value == 1) {
    register();
    menu();
  }

  if (value == 2) {
    search();
    menu();
  }

  if (value == 3) {
    deleteCar();
    menu();
  }

  if (value == 4) {
    alterar();
    menu();
  }

  if (value == 5) {
    alterar();
    menu();
  }
}

// ⦁ Não se pode cadastrar uma placa previamente cadastrada;
function register() {
  let licencePlate = prompt("licencePlate");
  let isRegister = false;
  carsDatabase.forEach((c) => {
    if (c.licencePlate == licencePlate) {
      isRegister = true;
    }
  });

  if (isRegister) {
    alert(`
    Plate has registration
    Cannot be registred    
    `);
  } else {
    let brand = prompt("brand");
    let model = prompt("model");
    let year = prompt("year");
    let car = {
      brand,
      model,
      licencePlate,
      year,
    };
    carsDatabase.push(car);
    alert(`Registred Car`);
  }
}

// ⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa;
function search() {
  let searchOption = prompt(`
    Select one option
    (1) - License Plate
    (2) - Brand
    (3) - Model
    (4) - Back To Previuous Menu
    `);
  if (searchOption == 1) {
    licencePlate();
    search();
  }

  if (searchOption == 2) {
    brand();
    search();
  }

  if (searchOption == 3) {
    model();
    search();
  }

  if (searchOption == 4) {
    menu();
  }

  function licencePlate() {
    let findPlate = prompt("Inform plate for research");
    let carFindPlate = carsDatabase.find(
      (carFindPlate) => carFindPlate.licencePlate === findPlate
    );

    if (carFindPlate) {
      return alert(`
            Brand: ${carFindPlate.brand}
            Model: ${carFindPlate.model}
            Licence Plate: ${carFindPlate.licencePlate}
            Year: ${carFindPlate.year}
            `);
    } else {
      return alert(`No regitred car with this licence plate`);
    }
  }

  function brand() {
    let findBrand = prompt("Inform brand for research");

    let carsBrand = [];
    carsDatabase.forEach((cBrand) => {
      if (cBrand.brand == findBrand) {
        carsBrand.push(cBrand);
      }
    });

    if (carsBrand.length > 0) {
      for (let i = 0; i < carsBrand.length; i++) {
        const searchResultBrand = carsBrand[i];
        alert(`
                Brand: ${searchResultBrand.brand}
                Model: ${searchResultBrand.model}
                Licence Plate: ${searchResultBrand.licencePlate}
                Year: ${searchResultBrand.year}
                `);
      }
    } else {
      alert(`No registred car with this brand`);
    }
    return;
  }

  function model() {
    let searchModel = prompt("Inform model for research");

    let carsModel = [];
    carsDatabase.forEach((cModel) => {
      if (cModel.model == searchModel) {
        carsModel.push(cModel);
      }
    });

    if (carsModel.length > 0) {
      for (let i = 0; i < carsModel.length; i++) {
        const resultModel = carsModel[i];
        alert(`
                Brand: ${resultModel.brand}
                Model: ${resultModel.model}
                Licence Plate: ${resultModel.licencePlate}
                Year: ${resultModel.year}
                `);
      }
    } else {
      alert(`No registred car with this model`);
    }
    return;
  }
}

// ⦁ A exclusão deve ser feita pela placa do veículo;
function deleteCar() {
  licencePlateToRemove = prompt(`Inform plate to delete`);
  let carExist = false;
  carsDatabase.forEach((carDelete) => {
    if (carDelete.licencePlate == licencePlateToRemove) {
      carExist = true;
    }
  });

  if (carExist) {
    for (let i = 0; i < carsDatabase.length; i++) {
      const car = carsDatabase[i];

      if (licencePlateToRemove == car.licencePlate) {
        carsDatabase.splice(i, 1);
        alert(`Car removed`);
        break;
      }
    }
  } else {
    alert(`Don't exist car with this plate`);
  }
}

// ⦁ O usuário deve pesquisar um veículo pela placa para alterar o cadastro e só deve permitir alterar o modelo e marca;
function alterar() {}

// removendoArray
// array.splice(0,1) -> ("0") Posição para remoção // ("1") quantidade de remoção
menu();

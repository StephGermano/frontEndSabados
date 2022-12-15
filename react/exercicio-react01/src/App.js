import { useState } from "react";
import "./App.css";

function App() {
  const [licensePlate, setLicensePlate] = useState();
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();

  const [carsDatabase, setCarsDatabase] = useState([]);

  function register() {
    let carExist = false;
    carsDatabase.forEach((e) => {
      if (e.licensePlate == licensePlate) {
        carExist = true;
      }
    });

    if (carExist) {
      alert("Carro já cadastrado");
      clean();
    } else {
      const newCar = {
        licensePlate,
        brand,
        model,
        year,
      };

      carsDatabase.push(newCar);
      setCarsDatabase([...carsDatabase]);
      clean();
    }
  }

  //const and functions to research
  const [licensePlateResearch, setLicensePlateResearch] = useState();
  function plateResearch() {
    let carFindPlate = carsDatabase.find(
      (carFindPlate) => carFindPlate.licensePlate === licensePlateResearch
    );

    if (carFindPlate) {
      alert(`
      Marca: ${carFindPlate.brand}
      Modelo: ${carFindPlate.model}
      Placa: ${carFindPlate.licensePlate}
      Ano: ${carFindPlate.year}`);
    } else {
      alert(`Carro não encontrado no banco de dados`);
    }

    setLicensePlateResearch("");
  }

  const [searchBrand, setSearchBrand] = useState();
  function brandResearch() {
    let carsBrand = [];
    carsDatabase.forEach((cBrand) => {
      if (cBrand.brand == searchBrand) {
        carsBrand.push(cBrand);
      }
    });

    if (carsBrand.length > 0) {
      for (let i = 0; i < carsBrand.length; i++) {
        const element = carsBrand[i];
        alert(`
        Marca: ${element.brand}
        Model: ${element.model}
        Placa: ${element.licensePlate}
        Ano: ${element.year}`);
      }
    } else {
      alert(`Não possui carro dessa marca cadastrado`);
    }
    setSearchBrand("");
  }

  const [searchModel, setSearchModel] = useState();
  function modelResearch() {
    let carsModel = [];
    carsDatabase.forEach((cModel) => {
      if (cModel.model == searchModel) {
        carsModel.push(cModel);
      }
    });

    if (carsModel.length > 0) {
      for (let i = 0; i < carsModel.length; i++) {
        const element = carsModel[i];
        alert(`
        Marca: ${element.brand}
        Model: ${element.model}
        Placa: ${element.licensePlate}
        Ano: ${element.year}`);
      }
    } else {
      alert(`Não possui carro dessa marca cadastrado`);
    }
    setSearchModel("");
  }
  // function to delete
  const [plateToRemove, setPlateToRemove] = useState();
  function deleteCar() {
    let carExist = false;
    carsDatabase.forEach((cDelete) => {
      if (cDelete.licensePlate == plateToRemove) {
        carExist = true;
      }
    });

    if (carExist) {
      for (let i = 0; i < carsDatabase.length; i++) {
        const car = carsDatabase[i];
        if (plateToRemove == car.licensePlate) {
          carsDatabase.splice(i, 1);
          setCarsDatabase([...carsDatabase]);
          setPlateToRemove("");
          alert(`Carro removido`);
        }
      }
    } else {
      alert(`Não existe carro cadastrado com essa placa`);
      setPlateToRemove("");
    }
  }

  // fucntion change
  const [carChange, setCarChange] = useState();

  function change() {
    let carChangeExist = false;
    carsDatabase.forEach((cChange) => {
      if (cChange.licensePlate == carChange) {
        carChangeExist = true;
      }
    });
    if (carChangeExist) {
      let newBrand = prompt(`Qual a nova marca?`);
      let newModel = prompt(`Qual o novo modelo?`);

      for (let i = 0; i < carsDatabase.length; i++) {
        const car = carsDatabase[i];
        if (carChange == car.licensePlate) {
          let newCar = {
            licensePlate: car.licensePlate,
            brand: newBrand,
            model: newModel,
            year: car.year,
          };
          carsDatabase.splice(i, 1, newCar);
          setCarsDatabase([...carsDatabase]);
          setCarChange("");
        }
      }
    } else {
      alert(`Não existe carro cadastrado com essa placa`);
      setCarChange("");
    }
  }

  // funciton to clean
  function clean() {
    setLicensePlate("");
    setBrand("");
    setModel("");
    setYear("");
  }

  return (
    <>
      <div className="linha">
        <div className="column">
          <div className="form m5">
            <h1>Cadastro de Carro</h1>

            <input
              className="m5"
              placeholder="Placa"
              value={licensePlate}
              onChange={(e) => {
                setLicensePlate(e.target.value);
              }}
            />

            <input
              className="m5"
              placeholder="Marca"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />

            <input
              className="m5"
              placeholder="Modelo"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />

            <input
              className="m5"
              placeholder="Ano"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />

            <button className="m5" onClick={register}>
              Cadastrar
            </button>
          </div>

          <div className="form m5">
            <h1>Pesquisa</h1>

            <input
              className="m5"
              placeholder="Placa para pesquisa"
              value={licensePlateResearch}
              onChange={(e) => {
                setLicensePlateResearch(e.target.value);
              }}
            />
            <button className="m5" onClick={plateResearch}>
              Pesquisar
            </button>

            <input
              className="m5"
              placeholder="Marca para pesquisa"
              value={searchBrand}
              onChange={(e) => {
                setSearchBrand(e.target.value);
              }}
            />
            <button className="m5" onClick={brandResearch}>
              Pesquisar
            </button>

            <input
              className="m5"
              placeholder="Modelo para pesquisa"
              value={searchModel}
              onChange={(e) => {
                setSearchModel(e.target.value);
              }}
            />
            <button className="m5" onClick={modelResearch}>
              Pesquisar
            </button>
          </div>
        </div>

        <div className="column">
          <div className="form m5">
            <h1>Deletar Carro</h1>
            <input
              className="m5"
              placeholder="Placa para remover"
              value={plateToRemove}
              onChange={(e) => {
                setPlateToRemove(e.target.value);
              }}
            />
            <button className="m5" onClick={deleteCar}>
              Excluir carro
            </button>
          </div>
          <div className="form m5">
            <h1>Alterar Cadastro</h1>
            <input
              className="m5"
              placeholder="Placa"
              value={carChange}
              onChange={(e) => {
                setCarChange(e.target.value);
              }}
            />
            <button className="m5" onClick={change}>
              Alterar
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="table-structure">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {carsDatabase.map((car) => {
              return (
                <tr>
                  <td>{car.licensePlate}</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

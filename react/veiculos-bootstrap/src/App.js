import "./App.css";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { BsFillTrash2Fill } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");

  const [veiculos, setVeiculos] = useState([]);

  function cadastrar() {
    let carExist = false;
    veiculos.forEach((e) => {
      if (e.placa == placa) {
        carExist = true;
      }
    });

    if (carExist) {
      alert(`Veiculo já possui cadastro!`);
      clean();
    } else {
      const veiculo = {
        placa,
        modelo,
        marca,
        ano,
      };
      setVeiculos([veiculo, ...veiculos]);
      alert(`veiculo cadastrado com sucesso!`);
      clean();
    }
  }

  function excluir(placa) {
    veiculos.forEach((veiculo, index) => {
      if (veiculo.placa == placa) {
        veiculos.splice(index, 1);
        setVeiculos([...veiculos]);
        alert(`Veiculo excluido com sucesso`);
      }
    });
  }

  function clean() {
    setPlaca("");
    setMarca("");
    setModelo("");
    setAno("");
  }

  return (
    <>
      <div className="container">
        <InputGroup className="mb-2 mt-1">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Placa"
            value={placa}
            onChange={(e) => {
              setPlaca(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Marca"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Ano"
            value={ano}
            onChange={(e) => {
              setAno(e.target.value);
            }}
          />
        </InputGroup>
        <Button className="mb-3" onClick={cadastrar}>
          Salvar
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo) => {
              return (
                <tr>
                  <td>{veiculo.placa}</td>
                  <td>{veiculo.marca}</td>
                  <td>{veiculo.modelo}</td>
                  <td>{veiculo.ano}</td>
                  <td>
                    <Button
                      onClick={() => {
                        excluir(veiculo.placa);
                      }}
                    >
                      <BsFillTrash2Fill />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;

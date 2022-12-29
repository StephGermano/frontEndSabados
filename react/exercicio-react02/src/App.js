import "react-calendar/dist/Calendar.css";

import { useState } from "react";
import {
  Button,
  CloseButton,
  Form,
  InputGroup,
  Container,
  Table,
  Accordion,
} from "react-bootstrap";
import { BsFillChatLeftTextFill, BsFillPencilFill } from "react-icons/bs";
import Calendar from "react-calendar";

import "./App.css";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [pages, setPages] = useState("");
  const [date, setDate] = useState(new Date());

  const [bookDatabase, setBookDatabase] = useState([]);

  function create() {
    let bookExist = false;
    bookDatabase.forEach((e) => {
      if (e.title == title) {
        bookExist = true;
      }
    });

    if (bookExist) {
      alert(`Livro já possui cadastro`);
      clean();
    } else {
      let newId = bookDatabase.length + 1;
      bookDatabase.forEach((e) => {
        if (e.id == newId) {
          newId++;
        }
      });

      let newDate = date.toLocaleDateString();
      let pagesRead = 0;
      const book = {
        id: newId,
        title,
        author,
        sinopse,
        date: newDate,
        pagesRead,
        pages,
      };
      bookDatabase.push(book);
      setBookDatabase([...bookDatabase]);
      alert(`Livro cadastrado`);
      clean();
      console.log(bookDatabase);
    }
  }

  function bookDelete(title) {
    bookDatabase.forEach((livro, index) => {
      if (livro.title == title) {
        bookDatabase.splice(index, 1);
        setBookDatabase([...bookDatabase]);
        alert(`Livro Excluido`);
      }
    });
  }

  function showSinopse(sinopse) {
    bookDatabase.forEach((livro) => {
      if (livro.sinopse == sinopse) {
        alert(livro.sinopse);
      }
    });
  }

  function changePages(title) {
    bookDatabase.forEach((livro) => {
      if ((livro.title = title)) {
        let newPages = prompt(`Qual o novo valor?`);
        livro.pagesRead = newPages;
        setBookDatabase([...bookDatabase]);
      }
    });
  }

  function clean() {
    setTitle("");
    setAuthor("");
    setSinopse("");
    setPages("");
  }

  return (
    <>
      <Container>
        <div className="container mt-3 form">
          <h1>Cadastro de Livros</h1>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Título"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Autor"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Quantidade de Páginas"
              value={pages}
              onChange={(e) => {
                setPages(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="Sinopse"
              value={sinopse}
              onChange={(e) => {
                setSinopse(e.target.value);
              }}
            />
          </InputGroup>
          <div>
            <Calendar
              className="calendar mb-3"
              value={date}
              onChange={setDate}
            />
          </div>
          <Button onClick={create}>Salvar</Button>
        </div>
        <br />
      </Container>
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <AccordionHeader className="align">Banco de Dados</AccordionHeader>
            <AccordionBody>
              <div className="container mt-3 border border-dark rounded">
                <h3 className="align">Biblioteca</h3>
                <Table hover bordered size="sm">
                  <thead>
                    <tr>
                      <th>iD</th>
                      <th>Título</th>
                      <th>Autor</th>
                      <th>Data</th>
                      <th>Sinopse</th>
                      <th>Páginas Lidas</th>
                      <th>Páginas Totais</th>
                      <th>%</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookDatabase.map((book) => {
                      return (
                        <tr>
                          <td>{book.id}</td>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td>{book.date}</td>
                          <td>
                            <BsFillChatLeftTextFill
                              onClick={() => {
                                showSinopse(book.sinopse);
                              }}
                            />
                          </td>
                          <td>
                            {book.pagesRead}{" "}
                            <BsFillPencilFill
                              onClick={() => {
                                changePages(book.title);
                              }}
                            />
                          </td>
                          <td>{book.pages}</td>
                          <td>{(book.pagesRead / book.pages) * 100}</td>
                          <td>
                            <CloseButton
                              onClick={() => {
                                bookDelete(book.title);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={8}>Total de Livros Cadastrados</td>
                      <td>{bookDatabase.length}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default App;

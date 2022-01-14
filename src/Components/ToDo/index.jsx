import React, { useContext, useState, useEffect } from "react";
import { TodoListContext } from "../../context/ToDoListContext";
import TodoCard from "../TodoCard";
import { Button, Input, Card, Title, Container, CardCategoria } from "../UI";

const ToDo = () => {
  const { todoList, adicionarTarefa } = useContext(TodoListContext);

  const [tarefa, setTarefa] = useState("");
  const [categorias, setCategorias] = useState([]);

  const getCategorias = () => {
    const cat = todoList.reduce((acc, next) => {
      if (acc.includes(next.categoria)) {
        return acc;
      }

      acc.push(next.categoria);
      return acc;
    }, []);

    return cat;
  };

  const handleTarefa = (e) => {
    const textoTarefa = e.target.value;
    setTarefa(textoTarefa);
  };

  const filtrarCategoria = (categoria) => {};

  const limparFiltro = () => {
    setCategorias(getCategorias());
    return;
  };

  useEffect(() => {
    console.log("Conponente renderizado");
    setCategorias(getCategorias());
  }, []);

  return (
    <>
      <Card>
        <Title>Add Todo</Title>
        <Input
          onChange={(e) => handleTarefa(e)}
          transparent
          type={"text"}
          placeholder="Insert your task"
        />
        <Button onClick={(e) => adicionarTarefa(tarefa)} primary>
          Adicionar
        </Button>
      </Card>

      <h4 style={{ textAlign: "center", color: "wheat" }}>Categorias</h4>
      <Container>
        {categorias.map((cat, index) => (
          <CardCategoria key={index} categoria={cat}>
            <button onClick={() => filtrarCategoria(cat)}>{cat}</button>
          </CardCategoria>
        ))}

        <CardCategoria>
          <button onClick={() => limparFiltro()}>todas</button>
        </CardCategoria>
      </Container>

      <Container>
        {todoList.map((task, index) => (
          <TodoCard key={index} tarefa={task} posicao={index}>
            {task.description}
          </TodoCard>
        ))}
      </Container>
    </>
  );
};

export default ToDo;

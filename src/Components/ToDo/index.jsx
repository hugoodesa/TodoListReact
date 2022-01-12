import React, { useContext, useState } from "react";
import { TodoListContext } from "../../context/ToDoListContext";
import TodoCard from "../TodoCard";
import { Button, Input, Card, Title, Container } from "../UI";

const ToDo = () => {
  const { todoList, adicionarTarefa } = useContext(TodoListContext);

  const [tarefa, setTarefa] = useState("");

  const handleTarefa = (e) => {
    const textoTarefa = e.target.value;
    setTarefa(textoTarefa);
  };

  console.log("teste :" + todoList);

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
        <span>descricao inválida</span>
        <Button onClick={(e) => adicionarTarefa(tarefa)} primary>
          Adicionar
        </Button>
      </Card>

      <Container>
        {todoList.map((task, index) => (
          <TodoCard key={index} tarefa={task.open} posicao={index}>
            {task.description}
          </TodoCard>
        ))}
      </Container>
    </>
  );
};

export default ToDo;

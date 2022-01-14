import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoListContext } from "../../context/ToDoListContext";
import { Button, Card, Title, DescriptionTodo } from "../UI";

const CardHiglight = styled(Card)`
  &:hover {
    background-color: #3f3b3b;
  }
`;

const TodoCard = ({ children, tarefa, posicao }) => {
  const { removerTarefa, todoList, setTodoList } = useContext(TodoListContext);

  const [nTarefa, setNTarefa] = useState(tarefa);

  const handleTarefa = () => {
    const novoStatusTarefa = { ...nTarefa };
    novoStatusTarefa.open = !nTarefa.open;
    setNTarefa(novoStatusTarefa);

    const list = [...todoList];

    list[posicao] = novoStatusTarefa;

    setTodoList(list);
  };

  return (
    <CardHiglight size={"normal"}>
      <Title>Todo List</Title>
      <Card size={"sm"}>
        <DescriptionTodo>{children}</DescriptionTodo>
        <DescriptionTodo>
          Status : {nTarefa.open ? "Aberta" : "Fechada"}
        </DescriptionTodo>
        <DescriptionTodo>Categoria : {nTarefa.categoria}</DescriptionTodo>
      </Card>
      <Button primary onClick={(e) => handleTarefa()}>
        Change status
      </Button>
      <Button onClick={() => removerTarefa(posicao)}>Remover</Button>
    </CardHiglight>
  );
};

export default TodoCard;

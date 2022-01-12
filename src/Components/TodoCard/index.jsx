import React, { useContext } from "react";
import styled from "styled-components";
import { TodoListContext } from "../../context/ToDoListContext";
import ToDo from "../ToDo";
import { Button, Card, Title, DescriptionTodo } from "../UI";

const CardHiglight = styled(Card)`
  &:hover {
    background-color: #3f3b3b;
  }
`;

const TodoCard = ({ children, tarefa, posicao }) => {
  const { removerTarefa } = useContext(TodoListContext);

  return (
    <CardHiglight size={"normal"}>
      <Title>Todo List</Title>
      <Card size={"sm"}>
        <DescriptionTodo>{children}</DescriptionTodo>
        <DescriptionTodo>
          Status : {tarefa ? "Aberta" : "Fechada"}
        </DescriptionTodo>
      </Card>
      <Button primary>Change status</Button>
      <Button onClick={() => removerTarefa(posicao)}>Remover</Button>
    </CardHiglight>
  );
};

export default TodoCard;

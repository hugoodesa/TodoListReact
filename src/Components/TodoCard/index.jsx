import React from "react";
import styled from "styled-components";
import { Button, Card, Title, DescriptionTodo } from "../UI";

const CardHiglight = styled(Card)`
  &:hover {
    background-color: #3f3b3b;
  }
`;

const TodoCard = ({ children }) => {
  return (
    <CardHiglight size={"normal"}>
      <Title>Todo List</Title>
      <Card size={"sm"}>
        <DescriptionTodo>{children}</DescriptionTodo>
      </Card>
      <Button>Remover</Button>
    </CardHiglight>
  );
};

export default TodoCard;

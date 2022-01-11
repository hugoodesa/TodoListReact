import React, { useContext } from "react";
import { TodoListContext } from "../../context/ToDoListContext";
import { Button, Input, Card, Title, DescriptionTodo } from "../UI";

const ToDo = () => {
  const { nome } = useContext(TodoListContext);

  console.log(nome);

  return (
    <>
      <Card>
        <Title>Add Todo</Title>
        <Input transparent type={"text"} />
        <Button primary>Adicionar</Button>
      </Card>

      <Card>
        <Title>Todo List</Title>
        <Card sm>
          <DescriptionTodo>Task #1</DescriptionTodo>
        </Card>
        <Button>Remover</Button>
      </Card>
    </>
  );
};

export default ToDo;

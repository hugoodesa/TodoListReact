import React, { useContext } from "react";
import { TodoListContext } from "../../context/ToDoListContext";
import TodoCard from "../TodoCard";
import { Button, Input, Card, Title, Container } from "../UI";

const ToDo = () => {
  const todoList = useContext(TodoListContext);

  console.log(todoList);

  return (
    <>
      <Card>
        <Title>Add Todo</Title>
        <Input transparent type={"text"} placeholder="Insert your task" />
        <Button primary>Adicionar</Button>
      </Card>

      {/*
        <Container>
        <TodoCard>Task#1</TodoCard>
        <TodoCard>Task#2</TodoCard>
        <TodoCard>Task#3</TodoCard>
      </Container>
     */}
      <Container>{todoList}</Container>
    </>
  );
};

export default ToDo;

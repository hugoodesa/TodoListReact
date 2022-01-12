import React, { createContext, useState, useEffect } from "react";
import { getList } from "../../api/api";

export const TodoListContext = createContext([]);
TodoListContext.displayName = "TodoListProvider";

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState("");

  useEffect(() => {
    getList("Tasks").then((resp) => setTodoList(resp));
  }, []);

  return (
    <TodoListContext.Provider value={todoList}>
      {children}
    </TodoListContext.Provider>
  );
};

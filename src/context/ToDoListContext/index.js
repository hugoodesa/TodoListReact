import React, { createContext } from "react";

export const TodoListContext = createContext([]);
TodoListContext.displayName = "TodoListProvider";

export const TodoProvider = ({ children }) => {
  const nome = "abc";

  return (
    <TodoListContext.Provider value={{ nome }}>
      {children}
    </TodoListContext.Provider>
  );
};

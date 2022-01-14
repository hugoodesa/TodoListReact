import React, { createContext, useState /* useEffect */ } from "react";
/* import { getList } from "../../api/api"; */

export const TodoListContext = createContext([]);
TodoListContext.displayName = "TodoListProvider";

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    { description: "description 1", open: false, categoria: "games" },
    { description: "description 2", open: false, categoria: "games" },
    { description: "description 3", open: false, categoria: "Livros" },
    { description: "description 4", open: true, categoria: "Livros" },
    { description: "description 5", open: false, categoria: "Musicas" },
  ]);

  const adicionarTarefa = (textoTarefa) => {
    if (!isDescricaoTarefa(textoTarefa)) {
      alert("Descricao inválida");
      return;
    }

    const tarefa = { description: textoTarefa, open: false };

    const novaListaTarefas = [...todoList, tarefa];

    setTodoList(novaListaTarefas);
  };

  const removerTarefa = (posicao) => {
    const novaListaTarefas = [...todoList];
    novaListaTarefas.splice(posicao, 1);
    setTodoList(novaListaTarefas);
  };

  const isDescricaoTarefa = (texto) => {
    if (texto.trim().length === 0) {
      return false;
    }

    return true;
  };

  return (
    <TodoListContext.Provider
      value={{ todoList, setTodoList, adicionarTarefa, removerTarefa }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

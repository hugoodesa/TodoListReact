import "./App.css";
import ToDo from "./Components/ToDo";
import { TodoProvider } from "./context/ToDoListContext";

function App() {
  return (
    <TodoProvider>
      <ToDo />
    </TodoProvider>
  );
}

export default App;

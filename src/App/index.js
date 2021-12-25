import { TodoProvider } from "../contexts/TodoContext";
import { AppUI } from "./AppUI";

const defautltTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de NEXT", completed: true },
  { text: "Alimentar al gato", completed: false },
  { text: "Curso de EF", completed: false },
];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

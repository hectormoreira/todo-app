import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso de NEXT", completed: true },
  { text: "Alimentar al gato", completed: false },
  { text: "Curso de EF", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
          text={todo.text}
          key={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

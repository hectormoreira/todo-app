import React, { useContext } from 'react'
import { TodoCounter } from "../components/TodoCounter";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoContext } from '../contexts/TodoContext';

function AppUI() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo } = useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />


            <TodoList>
                {error && <p>Tenemos un error...</p>}
                {loading && <p>Cargando...</p>}

                {(!loading && !searchedTodos.length) &&
                    <p>Crea tu primer TODO</p>
                }

                {searchedTodos.map((todo) => (
                    <TodoItem
                        text={todo.text}
                        key={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    )
}

export { AppUI }

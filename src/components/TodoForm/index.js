import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, setOpenModal } = useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Ingresa tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Tomar el curso de React Native"
            ></textarea>

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar</button>

                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };

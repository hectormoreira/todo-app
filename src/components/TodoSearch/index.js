import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext)

    const onSearchValueSearch = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    };

    return (
        <>
            <input
                className="TodoSearch"
                type="text"
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueSearch}
            />
            <p className="TodoSearchValue">Búsqueda: {searchValue}</p>
        </>
    );
}

export { TodoSearch };

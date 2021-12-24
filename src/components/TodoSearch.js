import React, { useState } from "react";
import "./styles/TodoSearch.css";

function TodoSearch() {
    const [searchValue, setSearchValue] = useState('');

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

import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
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

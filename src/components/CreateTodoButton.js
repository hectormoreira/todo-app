import React from "react";
import "./styles/CreateTodoButton.css"

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    console.log("creando nueva task");
  }


  return (
    <>
      <button
        className="CreateTodoButton"
        onClick={onClickButton}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButton };

import React from "react";

import AddTodoButton from "./AddTodoButton";
import Item from "./Item";

function TodoApp() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Todo List:</h1>
      <AddTodoButton />
      <Item items />
    </div>
  );
}
export default TodoApp;

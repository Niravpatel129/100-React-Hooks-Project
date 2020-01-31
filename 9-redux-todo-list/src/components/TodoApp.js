import React from "react";
import { connect } from "react-redux";

import AddTodoButton from "./AddTodoButton";

function TodoApp({ todos }) {
  console.log(todos);
  return (
    <div>
      <h1>Todo List:</h1>
      <AddTodoButton />
      {todos.map((todo, index) => (
        <p key={index}>{todo.name}</p>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todoListReducer };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

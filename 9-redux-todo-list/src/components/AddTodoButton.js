import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

function AddTodoButton() {
  const [input, updateInput] = useState("");

  const handleOnChange = e => {
    updateInput(e.target.value);
  };

  const handleOnClick = () => {
    if (!input) return;
  };

  return (
    <div>
      <p>Enter New Todo</p>
      <input value={input} onChange={handleOnChange}></input>
      <button onClick={handleOnClick}>+</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todoListReducer };
};

const mapDispatchToProps = dispatch => {
  return { addTodo: dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoButton);

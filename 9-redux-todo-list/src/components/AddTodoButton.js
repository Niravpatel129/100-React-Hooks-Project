import React, { useState } from "react";
import { connect } from "react-redux";
import { toDoActions } from "../actions";

function AddTodoButton({ submitAdd }) {
  const [input, updateInput] = useState("");

  const handleOnChange = e => {
    updateInput(e.target.value);
  };

  const handleOnClick = () => {
    if (!input) return;
    submitAdd(input);
    updateInput("");
  };

  return (
    <div>
      <p>Enter New Todo</p>
      <input value={input} onChange={handleOnChange}></input>{" "}
      <button onClick={handleOnClick}>+</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todoListReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAdd: item => {
      dispatch(toDoActions.addTodo(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoButton);

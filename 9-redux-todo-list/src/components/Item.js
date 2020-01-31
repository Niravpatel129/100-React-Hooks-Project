import React from "react";
import { connect, useDispatch } from "react-redux";
import { toDoActions } from "../actions";

function Item({ todos, removeTodo, moveUp, moveDown }) {
  const dispatch = useDispatch();

  const removeItem = index => {
    dispatch(toDoActions.removeTodo(index));
  };

  const handleRemove = index => {
    removeItem(index);
  };

  const handleMoveUp = index => {
    moveUp(index);
  };

  const handleMoveDown = index => {
    moveDown(index);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "fit-content",
          border: "1px solid black",
          margin: "30px",
          padding: "10px"
        }}
      >
        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px"
            }}
          >
            <div
              style={{
                width: "250px",
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center"
              }}
            >
              <span onClick={() => handleRemove(index)}>
                {todo.index}. {todo.name}{" "}
              </span>
              <span>
                <button onClick={() => handleMoveUp(index)}>UP</button>{" "}
                <button onClick={() => handleMoveDown(index)}>Down</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { todos: state.todoListReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    moveUp: index => {
      dispatch(toDoActions.moveUp(index));
    },
    moveDown: index => {
      dispatch(toDoActions.moveDown(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

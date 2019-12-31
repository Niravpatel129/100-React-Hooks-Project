import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [items, updateItems] = useState([
    "Eat Bread",
    "Make Bread",
    "Bake Bread",
    "Cook Bread"
  ]);
  const [inputValue, changeInput] = useState("");
  let tempArray = [...items];

  const handleRemoveItem = target => {
    tempArray.splice(target, 1);
    updateItems(tempArray);
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <div
        onClick={e => {
          handleRemoveItem(e.target.id);
        }}
        key={index}
        id={index}
      >
        {item}
      </div>
    ));
  };

  return (
    <div className="todolist">
      <h1>
        <u>Todo App</u>
      </h1>
      <input
        onChange={e => {
          changeInput(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          updateItems([...items, inputValue]);
        }}
      >
        Add Item
      </button>
      <br />
      <b>TodoList:</b> {renderItems()}
    </div>
  );
}

export default TodoList;

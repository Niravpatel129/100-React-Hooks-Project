const removeTodo = index => {
  return {
    type: "REMOVE_TODO",
    payload: index
  };
};

const addTodo = item => {
  console.log(addTodo);
  return {
    type: "ADD_TODO",
    payload: item
  };
};

export { removeTodo, addTodo };

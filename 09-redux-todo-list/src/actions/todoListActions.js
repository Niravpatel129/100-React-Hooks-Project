const removeTodo = index => {
  return {
    type: "REMOVE_TODO",
    payload: index
  };
};

const addTodo = item => {
  return {
    type: "ADD_TODO",
    payload: item
  };
};

const moveUp = index => {
  return {
    type: "MOVE_UP",
    payload: index
  };
};

const moveDown = index => {
  return {
    type: "MOVE_DOWN",
    payload: index
  };
};

export default { removeTodo, addTodo, moveUp, moveDown };

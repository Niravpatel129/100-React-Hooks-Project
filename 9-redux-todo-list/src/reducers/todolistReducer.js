const defaultTodos = [
  { name: "do something", index: 1 },
  { name: "eat cake", index: 2 },
  { name: "make pie", index: 3 }
];

const todoListReducer = (state = defaultTodos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return;
    case "REMOVE_TODO":
      return;
    default:
      return state;
  }
};

export default todoListReducer;

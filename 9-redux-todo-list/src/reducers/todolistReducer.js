const defaultTodos = [
  { name: "do something", index: 1 },
  { name: "eat cake", index: 2 },
  { name: "make pie", index: 3 },
  { name: "walk the dog", index: 4 },
  { name: "buy the pie", index: 5 },
  { name: "cool down the pie", index: 6 }
];

const todoListReducer = (state = defaultTodos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      let updatedAddTodos = [...state];
      updatedAddTodos.push({
        name: action.payload,
        index: updatedAddTodos.length + 1
      });
      return updatedAddTodos;
    case "REMOVE_TODO":
      let updatedRemoveTodos = [...state];
      updatedRemoveTodos.splice(action.payload, 1);
      return updatedRemoveTodos;
    case "MOVE_UP":
      if (action.payload === 0) return state;
      const updatedMoveUpTodos = [...state];

      const aboveItem = updatedMoveUpTodos[action.payload - 1];
      const currentItem = updatedMoveUpTodos[action.payload];

      updatedMoveUpTodos[action.payload] = aboveItem;
      updatedMoveUpTodos[action.payload - 1] = currentItem;

      return updatedMoveUpTodos;
    case "MOVE_DOWN":
      if (action.payload === state.length - 1) return state;

      const updatedMoveDownTodos = [...state];

      const belowItem = updatedMoveDownTodos[action.payload + 1];
      const currentItem2 = updatedMoveDownTodos[action.payload];

      updatedMoveDownTodos[action.payload] = belowItem;
      updatedMoveDownTodos[action.payload + 1] = currentItem2;

      return updatedMoveDownTodos;
    default:
      return state;
  }
};

export default todoListReducer;

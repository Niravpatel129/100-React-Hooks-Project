import { combineReducers } from "redux";

const defaultData = [];

const chartDataReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  chartDataReducer
});

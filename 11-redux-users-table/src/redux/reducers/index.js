import { combineReducers } from "redux";

const UserListReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  UserListReducer
});

import React, { useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const getData = () => dispatch(GetData());

  const users = useSelector(state => state.UserListReducer);

  useEffect(() => {
    getData();
  });

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;

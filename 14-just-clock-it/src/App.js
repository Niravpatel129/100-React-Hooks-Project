import React from "react";
import "./App.css";

import firebase from "./firebase";

firebase
  .firestore()
  .collection("times")
  .add({
    user: "asd",
    password: "asd"
  });

function App() {
  return (
    <div className="App">
      <h1>Just Clock it</h1>
    </div>
  );
}

export default App;

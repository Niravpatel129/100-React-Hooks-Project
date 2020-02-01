import React from "react";
import "./App.css";
import TeamList from "./components/TeamList";

function App() {
  return (
    <div className="App" style={{ paddingTop: "30px" }}>
      <h1>CardList</h1>

      <TeamList />
    </div>
  );
}

export default App;

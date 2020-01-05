import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Booklist from "./components/Booklist/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

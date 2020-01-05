import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ThemeToggle() {
  const { ToggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={ToggleTheme}>Toggle</button>
    </div>
  );
}

export default ThemeToggle;

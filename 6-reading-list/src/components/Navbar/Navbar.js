import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar(props) {
  const themeConsumer = useContext(ThemeContext);
  const { isLightTheme, light, dark } = themeConsumer;

  const theme = isLightTheme ? light : dark;

  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.hex }}>
        <h1>Reading List App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

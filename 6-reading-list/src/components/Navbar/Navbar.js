import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { isAuthenticated, toggleIsAuthenticated } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.hex }}>
        <h1>Reading List App</h1>
        <div onClick={() => toggleIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? "Logged in" : "Logged out"}
        </div>
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

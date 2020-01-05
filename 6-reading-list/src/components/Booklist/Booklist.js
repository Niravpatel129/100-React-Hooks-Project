import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Booklist() {
  const themeConsumer = useContext(ThemeContext);
  const { isLightTheme, light, dark } = themeConsumer;

  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.hex }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Harry Potter</li>
        <li style={{ background: theme.ui }}>The wind</li>
        <li style={{ background: theme.ui }}>The winded</li>
      </ul>
    </div>
  );
}

export default Booklist;

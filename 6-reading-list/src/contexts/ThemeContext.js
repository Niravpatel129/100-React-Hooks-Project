import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [light] = useState({ hex: "#555", ui: "#ddd", bg: "#eee" });
  const [dark] = useState({ hex: "#ddd", ui: "#333", bg: "#555" });

  const ToggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, ToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

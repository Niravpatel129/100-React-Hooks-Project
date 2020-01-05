import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme] = useState(false);
  const [light] = useState({ hex: "#555", ui: "#ddd", bg: "#eee" });
  const [dark] = useState({ hex: "#ddd", ui: "#333", bg: "#555" });

  const [fullState] = useState({ isLightTheme, light, dark });

  return (
    <ThemeContext.Provider value={fullState}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

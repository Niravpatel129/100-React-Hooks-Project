import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleIsAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

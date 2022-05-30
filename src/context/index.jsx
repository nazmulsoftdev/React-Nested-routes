import React, { useState, createContext } from "react";

const ContextAPI = createContext();

export const ContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);

  // this function for change user login to logout

  const AuthUser = () => {
    setLogin(!isLogin);
  };

  return (
    <ContextAPI.Provider value={{ isLogin: isLogin, AuthUser }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextAPI;

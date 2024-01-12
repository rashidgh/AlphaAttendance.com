import React, { createContext, useState } from "react";

export const GlobalApi = createContext();
const ContextApi = ({ children }) => {
  let [isLogin, setisLogin] = useState(false);

  return (
    <GlobalApi.Provider value={{ isLogin, setisLogin }}>
      {children}
    </GlobalApi.Provider>
  );
};

export default ContextApi;

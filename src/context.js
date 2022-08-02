import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="helo">{children}</AppContext.Provider>;
};

//  Custom Hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

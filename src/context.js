import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isModal, setIsModal] = useState(false);
  return (
    <AppContext.Provider
      value={{ isSidebar, setIsSidebar, isModal, setIsModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

//  Custom Hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

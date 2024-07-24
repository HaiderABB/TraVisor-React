import { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );

}

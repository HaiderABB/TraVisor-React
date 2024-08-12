import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setIsLoading, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

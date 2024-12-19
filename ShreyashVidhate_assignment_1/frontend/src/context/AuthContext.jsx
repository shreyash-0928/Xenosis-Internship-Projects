// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext(null);

// AuthProvider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state is null (unauthenticated)

  const login = (userData) => {
    setUser(userData); // Simulates logging in and sets the user data
  };

  const logout = () => {
    setUser(null); // Logs out the user by clearing state
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

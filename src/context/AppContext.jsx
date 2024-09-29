import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  // Define global states and functions
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

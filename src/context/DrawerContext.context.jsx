import { createContext, useState } from 'react';

export const DrawerContext = createContext({
  isDrawerOpen: false,
  setIsDrawerOpen: () => false,
});

export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const value = {
    isDrawerOpen,
    setIsDrawerOpen,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

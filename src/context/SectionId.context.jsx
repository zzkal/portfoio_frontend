import { createContext, useState, useEffect } from 'react';

export const SectionIdContext = createContext({
  sectionId: '',
  setSectionId: () => false,
});

export const SectionIdProvider = ({ children }) => {
  const [sectionId, setSectionId] = useState('');

  const value = {
    sectionId,
    setSectionId,
  };

  return (
    <SectionIdContext.Provider value={value}>
      {children}
    </SectionIdContext.Provider>
  );
};

import React, { createContext, useState, useContext } from "react";

// Criação do contexto
const GlobalContext = createContext();

// Provedor do contexto
export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState({
    quizz: false,
    gallery: false,
    msn: false,
  });

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para usar o contexto global
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

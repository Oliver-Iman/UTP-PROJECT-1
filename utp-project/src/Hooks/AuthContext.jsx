import React, { createContext, useContext, useState } from "react";

// Crea el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  return (
    <AuthContext.Provider value={{ correo, contraseña, setCorreo, setContraseña }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

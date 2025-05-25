import { createContext, useContext, useState } from "react";
import { Usuarios } from "../Funciones/usuarios.js";

const UsuContexto = createContext();

export const UsuProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const storedUser = localStorage.getItem("usuario");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (username, password) => {
    const found = Usuarios.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUsuario(found);
      localStorage.setItem("usuario", JSON.stringify(found));
    }
    return found;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  }
  return (
    <UsuContexto.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuContexto.Provider>
  );
};

export const usoUsuario = () => useContext(UsuContexto);
import { NavLink } from "react-router-dom";
import { usoUsuario } from "../contexto/UsuContexto";
import { Carrito } from "./Carrito";
import { useState } from "react";
import "../estilos/NavBar.css";
import { UsuarioBoton } from "./UsuarioBoton";

const NavBar = () => {
  const { usuario, logout } = usoUsuario();

  return (
    <header className="navBar">
      <nav>
        <NavLink to="/" className="navLink">Home</NavLink>

        {usuario && (usuario.role === "client" || usuario.role === "admin") && (
          <NavLink to="/tienda" className="navLink">Tienda</NavLink>
        )}

        {usuario && usuario.role === "admin" && (
          <NavLink to="/admin" className="navLink">Panel Administrador</NavLink>
        )}

        {usuario && (usuario.role === "client" || usuario.role === "admin") && (
          <Carrito />
        )}

        {usuario && (usuario.role === "client" || usuario.role === "admin") && (
          <UsuarioBoton />
        )}

        {!usuario && (
          <NavLink to="/login" className="navLink">Login</NavLink>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
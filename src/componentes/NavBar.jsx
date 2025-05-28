import { NavLink } from "react-router-dom";
import { usoUsuario } from "../contexto/UsuContexto";
import { Carrito } from "./Carrito";
import "../estilos/NavBar.css";
import { UsuarioBoton } from "./UsuarioBoton";

const NavBar = () => {
  const { usuario } = usoUsuario();

  return (
    <header className="navBar">
      <div className="navBar-logo-container">
        <img src="../src/assets/img/logo-tienda.png" alt="Logo" className="navBar-logo"/>
      </div>
      <div>
        <h1>Tiendita de Marcos</h1>
      </div>
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
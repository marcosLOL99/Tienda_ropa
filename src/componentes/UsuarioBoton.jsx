import { UserIcon } from "./Icons";
import { useState, useRef, useEffect } from "react";
import { usoUsuario } from "../contexto/UsuContexto";
import "../estilos/UsuarioBoton.css";

export function UsuarioBoton() {
    const { usuario, logout } = usoUsuario();
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMostrarMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="user-menu" ref={menuRef}>
            <button
                className="boton-usuario"
                onClick={() => setMostrarMenu((mostrar) => !mostrar)}
            >
                <UserIcon />
            </button>
            {mostrarMenu && (
                <div className="dropdown-menu">
                    <p>{usuario.nombre}</p>
                    <button onClick={logout}>Cerrar sesión</button>
                </div>
            )}
        </div>
    );
}
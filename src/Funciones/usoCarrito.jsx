import { useContext } from "react";
import { CarritoContext } from "../contexto/carrito.jsx";

export function usoCarrito() {
    const contexto = useContext(CarritoContext);

    if (contexto === undefined) {
        throw new Error("usoCarrito debe ser usado dentro de un CarritoProvider");
    }

    return contexto;
}
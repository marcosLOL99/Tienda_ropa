import { CartIcon, ClearCartIcon } from "./Icons";
import { useState } from "react";
import "../estilos/Carrito.css";
import { usoCarrito } from "../Funciones/usoCarrito.jsx";

export function Carrito() {
    const [abierto, setAbierto] = useState(false);
    const { carrito, total, limpiarCarrito, eliminarDelCarrito, agregarAlCarrito } = usoCarrito();

    const productosEnCarrito = carrito.map((producto) => (
        <li key={producto.id}>
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <strong>{producto.titulo}</strong> - {producto.precio}€
            </div>
            <div className="carrito-cantidad">
                <button onClick={() => eliminarDelCarrito(producto.id)}>-</button>
                <span><strong>Cant: {producto.cantidad}</strong></span>
                <button onClick={() => agregarAlCarrito(producto)}>+</button>
            </div>
            
        </li>
    ));
    
    return (
        <>
            <button className="boton-carrito" onClick={() => setAbierto(true)}>
                <CartIcon />
            </button>

            {abierto && (
                <aside className="carrito">
                    <button className="boton-volver" onClick={() => setAbierto(false)}>
                        volver
                    </button>
                    <ul>
                        {productosEnCarrito.length > 0 ? (
                            productosEnCarrito
                        ) : (
                            <li className="carrito-vacio">El carrito está vacío</li>
                        )}
                    </ul>
                    <footer className="carrito-footer">
                        <div className="carrito-total">
                            <strong>Total: {Number(total).toFixed(2)}€</strong> 
                        </div>
                        <div className="carrito-botones">
                            <button className="boton-pagar" onClick={limpiarCarrito}>Pagar</button>
                            <button className="boton-clearcart" onClick={limpiarCarrito}>
                                <ClearCartIcon />
                            </button> 
                        </div>
                    </footer>
                </aside>
            )}
        </>
    );
}
import { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem("carrito");
        return guardado ? JSON.parse(guardado) : [];
    });
    const [total, setTotal] = useState(() => {
        const guardado = localStorage.getItem("total");
        return guardado ? JSON.parse(guardado) : 0;
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("total", JSON.stringify(total));
    }, [carrito, total]);

    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.id === producto.id);
        if (productoExistente) {
            setCarrito(carrito.map(item =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
            ));
            setTotal(total + producto.precio);
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
            setTotal(total + producto.precio);
        }
    };

    const eliminarDelCarrito = (id) => {
        const productoEliminado = carrito.find(item => item.id === id);
        if (productoEliminado) {
            if (productoEliminado.cantidad > 1) {
                setCarrito(carrito.map(item =>
                    item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
                ));
            } else {
                setCarrito(carrito.filter(item => item.id !== id));
            }
            setTotal(total - productoEliminado.precio);
        }
    };

    const limpiarCarrito = () => {
        setCarrito([]);
        setTotal(0);
    };

    return (
        <CarritoContext.Provider value={{ carrito, total, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}
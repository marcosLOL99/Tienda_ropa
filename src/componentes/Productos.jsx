import '../estilos/Productos.css';
import { AddToCartIcon } from './Icons';
import { useContext } from 'react';
import { CarritoContext } from '../contexto/carrito.jsx';

export function Productos({ productos }) {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <section className='productos'>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
              <strong>{producto.titulo}</strong> - {producto.precio}€
            </div>
            <div>
              <button className='boton-agregar' onClick={() => agregarAlCarrito(producto)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
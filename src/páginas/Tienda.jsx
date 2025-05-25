import { BarraLateral } from '../componentes/BarraLateral.jsx'
import { Productos } from '../componentes/Productos.jsx'
import { usoDeFiltros } from '../Funciones/usoDeFiltros.js'
import { useState, useEffect } from 'react'
import '../estilos/Tienda.css'

const Tienda = () => {
  const { filtrarProductos } = usoDeFiltros();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/productos?_sort=categoria&_order=asc')
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  const productosFiltrados = filtrarProductos(productos);

  return (
    <>
      <main className='main-layout'>
        <BarraLateral />
        <Productos productos={productosFiltrados}/>
      </main>
    </>
  )
}

export default Tienda

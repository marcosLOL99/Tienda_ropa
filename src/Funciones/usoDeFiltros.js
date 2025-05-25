import { useContext } from 'react'
import { FiltroContexto } from '../contexto/filtros.jsx'

export function usoDeFiltros() {
  const {filtro, setFiltro} = useContext(FiltroContexto)

  const filtrarProductos = (productos) => {
    return productos.filter(producto => {
      const cumpleCategoria = filtro.categoria === 'all' || producto.categoria === filtro.categoria
      const cumplePrecio = producto.precio <= filtro.precio
      return cumpleCategoria && cumplePrecio
    })
  }
  return { filtro, setFiltro, filtrarProductos }
}

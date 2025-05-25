import { createContext, useState } from 'react'

export const FiltroContexto = createContext()

export function FiltroProvider ({ children }) {
  const [filtro, setFiltro] = useState({
    categoria: 'all',
    precio: 100,
  })

  return (
    <FiltroContexto.Provider value={{
      filtro,
      setFiltro
    }}
    >
      {children}
    </FiltroContexto.Provider>
  )
}
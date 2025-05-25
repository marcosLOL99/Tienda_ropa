import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FiltroProvider } from './contexto/filtros.jsx'

createRoot(document.getElementById('root')).render(
  <FiltroProvider>
    <App />
  </FiltroProvider>,
)

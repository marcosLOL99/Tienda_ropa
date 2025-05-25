import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsuProvider } from "./contexto/UsuContexto";
import Home from "./páginas/Home";
import Login from "./páginas/Login.jsx";
import NoAutorizado from "./páginas/NoAutorizado";
import Tienda from "./páginas/Tienda";
import PanelAdmin from "./páginas/PanelAdmin";
import RutaProtegida from "./Funciones/rutasProtegidas.jsx";
import NavBar from "./componentes/NavBar.jsx";
import { CarritoProvider } from "./contexto/carrito.jsx";


function App() {
  return (
    <UsuProvider>
      <CarritoProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/NoAutorizado" element={<NoAutorizado />} />

            <Route
              path="/tienda"
              element={
                <RutaProtegida allowedRoles={["client", "admin"]}>
                  <Tienda />
                </RutaProtegida>
              }
            />

            <Route
              path="/admin"
              element={
                <RutaProtegida allowedRoles={["admin"]}>
                  <PanelAdmin />
                </RutaProtegida>
              }
            />
          </Routes>
        </Router>
      </CarritoProvider>
    </UsuProvider>
  );
}

export default App;
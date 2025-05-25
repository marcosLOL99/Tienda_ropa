import { Navigate } from "react-router-dom";
import { usoUsuario } from "../contexto/UsuContexto";

const RutaProtegida = ({ children, allowedRoles }) => {
  const { usuario } = usoUsuario();

  if (!usuario) return <Navigate to="/login" />;
  if (!allowedRoles.includes(usuario.role)) return <Navigate to="/NoAutorizado" />;

  return children;
};

export default RutaProtegida;
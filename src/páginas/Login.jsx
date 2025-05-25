import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usoUsuario } from "../contexto/UsuContexto";
import "../estilos/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = usoUsuario();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(username, password);
    if (user) navigate("/");
    else alert("Credenciales incorrectas");
  };

  return (
    <div className="login-container">
      <form className="formulario-login" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <input placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AccountContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setTokenState, handleLogin } = useContext(AccountContext);
  const navigate = useNavigate();

  const confirm = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Todos los campos son obligatorios");
      return false;
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirm()) {
      const token = await handleLogin(email, password);
      if (token) {
        setTokenState(true);
        navigate("/");
        return;
      }
    } else {
      alert("Error en el login");
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="register">
          <div style={{ textAlign: "center" }}>
            <p className="register-form">Email</p>
            <input type="email" onChange={handleEmail} />
          </div>
          <div style={{ textAlign: "center" }}>
            <p className="register-form">Contraseña</p>
            <input type="password" onChange={handlePassword} />
          </div>
          <button type="submit">Iniciar sesión</button>
          <Link to={"/register"} className="text-decoration-none">
            <p className="register-link">¿No tienes cuenta? Regístrate aquí.</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

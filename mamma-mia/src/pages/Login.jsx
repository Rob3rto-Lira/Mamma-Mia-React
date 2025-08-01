import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const confirm = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Todos los campos son obligatorios");
      return;
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    } else {
      alert("Inicio de sesión exitoso");
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
      <div className="register">
        <div style={{ textAlign: "center" }}>
          <p className="register-form">Email</p>
          <input type="email" onChange={handleEmail} />
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="register-form">Contraseña</p>
          <input type="password" onChange={handlePassword} />
        </div>
        <button onClick={confirm}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Login;

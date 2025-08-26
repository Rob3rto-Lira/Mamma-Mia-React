import { useContext, useState } from "react";
import { AccountContext } from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setTokenState, handleRegister } = useContext(AccountContext);

  const confirm = async () => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    } else if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    } else if (confirmPassword.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    } else {
      const token = await handleRegister(email, password);
      if (!token) {
        alert("Ese correo ya está registrado");
        return;
      } else {
        alert("Registro exitoso");
        setTokenState(true);
      }
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
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
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p className="register-form">Confirmar contraseña</p>
        <input
          type="password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button onClick={confirm}>Enviar</button>
      </div>
    </div>
  );
};

export default Register;

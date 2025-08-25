import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AccountContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AccountContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="register-container">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          alt="profile icon"
        />
        <h1>Usuario Nuevo</h1>
      </div>
      <h2>{JSON.stringify(user)}</h2>
      <Button variant="danger" onClick={handleLogout}>
        <Link to="/" className="text-white text-decoration-none">
          Cerrar Sesión
        </Link>
      </Button>
    </div>
  );
};

export default Profile;

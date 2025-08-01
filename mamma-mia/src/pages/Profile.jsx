import React from "react";
import Button from "react-bootstrap/Button";


const Profile = () => {
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
      <h2>perfildeejemplo@gmail.com</h2>
    <Button variant="danger">Cerrar Sesión</Button>
    </div>
  );
};

export default Profile;

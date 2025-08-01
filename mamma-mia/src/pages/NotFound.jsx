import React from "react";
import "../assets/CSS/notfound.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>¡Uy! La página que buscas no existe o está mal escrita.</h1>
        <img
          src="https://media.istockphoto.com/id/806370190/vector/on-kitchen-stove-burns-food.jpg?s=612x612&w=0&k=20&c=zS5giMBAW1tVDp3IEkDpst2fqtdbu6Day71JIeOtftA="
          alt="Error 404"
        />
        <Button variant="danger">
            <Link to="/" className="text-white text-decoration-none">
              Volver
            </Link>
          </Button>
      </div>
    </>
  );
};

export default NotFound;

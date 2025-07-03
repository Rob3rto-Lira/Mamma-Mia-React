import React from "react";
import Button from "react-bootstrap/Button";

const CartPizza = () => {
  return (
    <div className="cart-pizza-container">
      <div className="cart-pizza">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          alt="Pizza Napolitana"
        />
        <h3>Napolitana</h3>
      </div>
      <h2>$5.950</h2>
      <Button variant="outline-danger">-</Button>
      <h1>1</h1>
      <Button variant="outline-primary">+</Button>
    </div>
  );
};

export default CartPizza;

import { pizzaCart } from "../../assets/JS/pizzas.js";
import "../../assets/CSS/cart.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import CartPizza from "../CartPizza/CartPizza.jsx";

const Cart = () => {
  const [cart, setCart] = useState(1);
  // const { cart, setCart } = useState('0');
  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>
      <CartPizza />
      <h1>
        Total: $5.950 <Button variant="dark">Pagar</Button>
      </h1>
    </div>
  );
};

export default Cart;

// import { pizzaCart } from "../assets/JS/pizzas.js";
import "../assets/CSS/cart.css";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartPrice } from "../context/CartContext.jsx";
import CartPizza from "../components/CartPizza.jsx";

const formatTotal = (value) => {
  const num = Number(value);
  return isNaN(num) ? value : num.toLocaleString("es-CL");
};

const Cart = () => {
  const { cart, setCart, total } = useContext(CartPrice);

  const handleIncrement = (pizzaName) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.name === pizzaName ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const handleDecrement = (pizzaName) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.name === pizzaName
            ? { ...pizza, count: Math.max(0, pizza.count - 1) }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>
      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            <CartPizza
              img={p.img}
              name={p.name}
              price={p.price}
              count={p.count}
              onDecrement={() => handleDecrement(p.name)}
              onIncrement={() => handleIncrement(p.name)}
            />
          </li>
        ))}
      </ul>
      <h1>
        Total: ${formatTotal(total)} <Button variant="dark">Pagar</Button>
      </h1>
    </div>
  );
};

export default Cart;

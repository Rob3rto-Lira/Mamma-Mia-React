// import { pizzaCart } from "../assets/JS/pizzas.js";
import "../assets/CSS/cart.css";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartPrice } from "../context/CartContext.jsx";
import CartPizza from "../components/CartPizza.jsx";
import { AccountContext } from "../context/UserContext.jsx";

const formatTotal = (value) => {
  const num = Number(value);
  return isNaN(num) ? value : num.toLocaleString("es-CL");
};

const Cart = () => {
  const { cart, setCart, total } = useContext(CartPrice);
  const { tokenState, handleCart } = useContext(AccountContext);

  const handleIncrement = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === pizzaId ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const handleDecrement = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === pizzaId
            ? { ...pizza, count: Math.max(0, pizza.count - 1) }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <h3>El carrito está vacío</h3>
      ) : (
        <>
          <ul>
            {cart.map((p, index) => (
              <CartPizza
                key={`${p.id}-${index}`}
                img={p.img}
                name={p.name}
                price={p.price}
                count={p.count}
                onDecrement={() => handleDecrement(p.id)}
                onIncrement={() => handleIncrement(p.id)}
              />
            ))}
          </ul>
          <h1>
            Total: ${formatTotal(total)}
            {tokenState ? (
              <Button variant="dark" onClick={() => handleCart(cart)}>Pagar</Button>
            ) : (
              <span> (Inicia sesión para pagar)</span>
            )}
          </h1>
        </>
      )}
    </div>
  );
};

export default Cart;

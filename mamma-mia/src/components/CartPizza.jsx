import Button from "react-bootstrap/Button";

const formatTotal = (value) => {
  const num = Number(value);
  return isNaN(num) ? value : num.toLocaleString("es-CL");
};

const CartPizza = ({
  id,
  img,
  name,
  price,
  count,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className="cart-pizza-container" key={id}>
      <div className="cart-pizza">
        <img src={img} />
        <h3>{name}</h3>
      </div>
      <div className="cart-buttons">
        <h2>${formatTotal(price)}</h2>
        <Button
          variant="outline-danger"
          onClick={onDecrement}
          disabled={count === 0}
        >
          -
        </Button>
        <h1>{count}</h1>
        <Button variant="outline-primary" onClick={onIncrement}>
          +
        </Button>
      </div>
    </div>
  );
};

export default CartPizza;

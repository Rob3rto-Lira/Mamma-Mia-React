import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const formatTotal = (value) => {
  const num = Number(value);
  return isNaN(num) ? value : num.toLocaleString("es-CL");
};
const CardPizza = ({ img, name, ingredients, price, id, onAddToCart }) => {
  const safeIngredients = Array.isArray(ingredients) ? ingredients : [];

  return (
    <Card className="CardPizza">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "gray" }}>Ingredientes:</p>
          <ul>
            {safeIngredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <h4>${formatTotal(price)}</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outline-dark">
            <Link to={"/pizza/p001"} className="text-decoration-none text-dark">
              Ver más 👀
            </Link>
          </Button>
          <Button
            variant="dark"
            onClick={() => onAddToCart({ img, name, price, id })}
          >
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

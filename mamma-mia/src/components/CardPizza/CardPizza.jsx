import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const formatTotal = (value) => {
  const num = Number(value);
  return isNaN(num) ? value : num.toLocaleString("es-CL");
};
const CardPizza = ({ img, name, ingredients, price, id }) => {
  const safeIngredients = Array.isArray(ingredients) ? ingredients : [];

  console.log("CardPizza id:", id);
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
          <Button variant="outline-dark">Ver más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

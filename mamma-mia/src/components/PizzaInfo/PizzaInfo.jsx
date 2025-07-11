import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../assets/CSS/InfoPizza.css"

const formatTotal = (value) => {
  const num = Number(value);
  return isNaN(num) ? value : num.toLocaleString("es-CL");
};
const PizzaInfo = ({ img, name, desc, ingredients, price, id }) => {
  const safeIngredients = Array.isArray(ingredients) ? ingredients : [];

  return (
    <Card className="InfoPizza" >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h3>{desc}</h3>
        
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
          <Button variant="dark" >Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PizzaInfo;

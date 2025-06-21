import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardPizza = ({ img, title, ingredients, price }) => {
  return (
    <Card className="CardPizza">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "gray" }}>Ingredientes:</p>
          <p>{ingredients}</p>
          <h4>{price}</h4>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outline-dark">Go somewhere</Button>
          <Button variant="dark">Go somewhere else</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

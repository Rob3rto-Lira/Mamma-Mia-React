import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";
import { pizzas } from "../../assets/JS/pizzas.js";

const Home = () => {
  return (
    <>
      <Header />
      <div className="cards">
        {pizzas.map((p) => (
          <CardPizza
            key={p.id}
            ingredients={p.ingredients}
            img={p.img}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

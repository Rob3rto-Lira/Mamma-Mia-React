import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";
import { pizzas } from "../../assets/JS/pizzas.js";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [ pizza, setPizza ] = useState([]);

  useEffect(() => {
    pizzaAPI();
  }, []);

  async function pizzaAPI() {
    try {
      const { data } = await axios.get("http://localhost:5000/api/pizzas");
      setPizza(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  }

  console.log(pizza)

  return (
    <>
      <Header />
      <div className="cards">
        {pizza.map((p) => (
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

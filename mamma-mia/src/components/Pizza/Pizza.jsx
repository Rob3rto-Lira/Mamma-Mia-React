import axios from "axios";
import React, { useEffect, useState } from "react";
import PizzaInfo from "../PizzaInfo/PizzaInfo";

const Pizza = () => {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    order();
  }, []);

  async function order() {
    try {
      const { data } = await axios.get("http://localhost:5000/api/pizzas/p001");
      setPizza([data]);
    } catch (error) {
      console.error("Error fetching pizzas.", error);
    }
  }

  return (
    <>
      <div className="cards">
        {pizza.map((p) => (
          <PizzaInfo
            key={p.id}
            ingredients={p.ingredients}
            img={p.img}
            desc={p.desc}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
    </>
  );
};

export default Pizza;

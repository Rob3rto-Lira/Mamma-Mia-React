import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import PizzaInfo from "../components/PizzaInfo";
import { CartPrice } from "../context/CartContext";

const Pizza = () => {
  // const [pizza, setPizza] = useState([]);
  const { addToCart, pizza } = useContext(CartPrice);


  // useEffect(() => {
  //   order();
  // }, []);

  // async function order() {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/api/pizzas/p001");
  //     setPizza([data]);
  //   } catch (error) {
  //     console.error("Error fetching pizzas.", error);
  //   }
  // }

  return (
    <>
      <div className="cards">
        {pizza.map((p) => (
          <PizzaInfo
            key={p.id}
            id={p.id}
            ingredients={p.ingredients}
            img={p.img}
            desc={p.desc}
            name={p.name}
            price={p.price}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Pizza;

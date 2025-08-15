import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import PizzaInfo from "../components/PizzaInfo";
import { CartPrice } from "../context/CartContext";
import { useParams } from "react-router-dom";

const Pizza = () => {
  // const [pizza, setPizza] = useState([]);
  const { addToCart, pizza } = useContext(CartPrice);
  const { id } = useParams();
  console.log(id);

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
        {pizza
          .filter((p) => p.id === id)
          .map((p) => (
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

import React from "react";
import Header from "../Header/Header";
import CardPizza from "../CardPizza/CardPizza";
import { pizzas } from "../../assets/JS/pizzas.js";
import { pizzaCart } from "../../assets/JS/pizzas.js";

const Home = () => {
  const conseguirPizzas = (name, prop) => {
    const pizza = pizzas.find((p) => p.name === name);
    return pizza ? pizza[prop] : undefined;
  };

  console.log(conseguirPizzas("Napolitana", "desc"));

  return (
    <>
      <Header />

      <div className="cards">
        <CardPizza
          ingredients={conseguirPizzas("Napolitana", "ingredients").join(", ")}
          img={conseguirPizzas("Napolitana", "img")}
          name={conseguirPizzas("Napolitana", "name")}
          price={conseguirPizzas("Napolitana", "price")}
          id={conseguirPizzas("Napolitana", "id")}
        />
        <CardPizza
          ingredients={conseguirPizzas("Española", "ingredients").join(", ")}
          img={conseguirPizzas("Española", "img")}
          name={conseguirPizzas("Española", "name")}
          price={conseguirPizzas("Española", "price")}
          id={conseguirPizzas("Española", "id")}
        />
        <CardPizza
          ingredients={conseguirPizzas("Salame", "ingredients").join(", ")}
          img={conseguirPizzas("Salame", "img")}
          name={conseguirPizzas("Salame", "name")}
          price={conseguirPizzas("Salame", "price")}
          id={conseguirPizzas("Salame", "id")}
        />
        <CardPizza
          ingredients={conseguirPizzas("Cuatro estaciones", "ingredients").join(
            ", "
          )}
          img={conseguirPizzas("Cuatro estaciones", "img")}
          name={conseguirPizzas("Cuatro estaciones", "name")}
          price={conseguirPizzas("Cuatro estaciones", "price")}
          id={conseguirPizzas("Cuatro estaciones", "id")}
        />
        <CardPizza
          ingredients={conseguirPizzas("Bacon", "ingredients").join(", ")}
          img={conseguirPizzas("Bacon", "img")}
          name={conseguirPizzas("Bacon", "name")}
          price={conseguirPizzas("Bacon", "price")}
          id={conseguirPizzas("Bacon", "id")}
        />
        <CardPizza
          ingredients={conseguirPizzas("Pollo picante", "ingredients").join(
            ", "
          )}
          img={conseguirPizzas("Pollo picante", "img")}
          name={conseguirPizzas("Pollo picante", "name")}
          price={conseguirPizzas("Pollo picante", "price")}
          id={conseguirPizzas("Pollo picante", "id")}
        />

        {/* <CardPizza
          img={
            "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          }
          title="Pizza Napolitana"
          ingredients="🍕 mozarella, tomates, jamón, orégano"
          price={5950}
        />
        <CardPizza
          img={
            "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          }
          title="Pizza Española"
          ingredients="🍕 mozarella, gorgonzola, parmesano, provolone"
          price={6950}
        />
        <CardPizza
          img={
            "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          }
          title="Pizza Pepperoni"
          ingredients="🍕 mozarella, pepperoni, orégano"
          price={6950}
        /> */}
      </div>
    </>
  );
};

export default Home;

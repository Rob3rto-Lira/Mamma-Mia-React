import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useContext } from "react";
import { CartPrice } from "../context/CartContext";

const Home = () => {
  const { addToCart, pizza } = useContext(CartPrice);

  return (
    <>
      <Header />
      <div className="cards">
        {pizza.map((p) => (
          <CardPizza
            key={p.id}
            id={p.id}
            ingredients={p.ingredients}
            img={p.img}
            name={p.name}
            price={p.price}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

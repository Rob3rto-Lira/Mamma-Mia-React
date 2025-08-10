import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const CartPrice = createContext();

const CartContext = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function pizzaAPI() {
      try {
        const { data } = await axios.get("http://localhost:5000/api/pizzas");
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    }
    pizzaAPI();
  }, []);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const found = prevCart.find((p) => p.id === pizza.id);
      if (found) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

  const total = useMemo(
    () => cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0),
    [cart]
  );

  return (
    <>
      <CartPrice.Provider value={{ pizza, cart, setCart, total, addToCart }}>
        {children}
      </CartPrice.Provider>
    </>
  );
};

export default CartContext;

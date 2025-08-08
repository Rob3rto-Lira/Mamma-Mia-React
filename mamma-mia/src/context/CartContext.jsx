import { createContext, useMemo, useState } from "react";
import { pizzaCart } from "../assets/JS/pizzas.js";

export const CartPrice = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);

  const total = useMemo(
    () => cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0),
    [cart]
  );
  

  return (
    <CartPrice.Provider value={{ cart, setCart, total }}>
      {children}
    </CartPrice.Provider>
  );
};

export default CartContext;

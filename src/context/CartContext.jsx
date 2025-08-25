import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart([...cart, producto]);
  };

  const resetCart = () => {
    setCart([]);
  };
  const removeById = (id) => {
    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };
  const getPrecioTotal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.cantidad;
    }, 0);

    return total;
  };

  const getCantidadTotal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeById,
        resetCart,
        getPrecioTotal,
        getCantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

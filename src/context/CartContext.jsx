import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCantidadEnCarrito = (id) =>
  cart.find(p => p.id === id)?.cantidad ?? 0;

  const getStockDisponible = (product) =>
  Math.max(0, Number(product.stock) - getCantidadEnCarrito(product.id));


  const addToCart = (producto) => {

  setCart((prev) => {
    const i = prev.findIndex((p) => p.id === producto.id);
    const agregar = producto.cantidad ;

    let enCarrito; 
    
    if (i !== -1) { 
      enCarrito = prev[i].cantidad; 
    } 
    
    else enCarrito = 0;

    const disponible = Math.max(0, producto.stock - enCarrito);

    const paraAgregar = Math.min(agregar, disponible);

    if (paraAgregar <= 0) return prev;

    if (i === -1) return [...prev, { ...producto, cantidad: paraAgregar }];

    const next = [...prev];

    next[i] = { ...next[i], cantidad: enCarrito + paraAgregar };
    
    return next;
  });

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
      return acc + elemento.precio * elemento.cantidad;
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
        getCantidadEnCarrito,
        getStockDisponible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

import "./Cart.css";

import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {

  const { cart, resetCart, removeById, getPrecioTotal } = useContext(CartContext); 
  let total = getPrecioTotal();

  return (
    <div className="carritoContainer">

      <h1>Carrito</h1>

      {cart.map((producto) => {
        return (
          <div
            key={producto.id}
          >
            <h2>{producto.title}</h2>
            <h2> ${producto.price}</h2>
            <h2> x{producto.cantidad}</h2>
            <button onClick={() => removeById(producto.id)}>eliminar</button>
          </div>

        );
      })}

      <h4>El total a pagar es : {total}</h4>
      <button onClick={resetCart}>Limpiar carrito</button>
    </div>

  );
};

export default Cart;

import "./Cart.css";

import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";

const Cart = () => {

  const { cart, resetCart, removeById, getPrecioTotal } = useContext(CartContext); 
  let total = getPrecioTotal();

  return (

    
    <div className="carritoGeneral">

      <h1>Carrito</h1>

      <div className="carritoContainer">

      {cart.map((producto) => {
        return (

          <div key={producto.id} className="cardCartContainer">
          
            <h2>{producto.titulo}</h2>
            <h3> ${producto.precio}</h3>
            <h3> x{producto.cantidad}</h3>
            <button onClick={() => removeById(producto.id)}>Eliminar</button>
          </div>

        );
      })}

      </div>

      <h2>El total a pagar es: AR$ {total}</h2>

      <button className="buttonClean" onClick={resetCart}>Limpiar carrito</button>
      
      <Link to="/checkout" className="buttonFinish">Finalizar compra</Link>

    </div>

  );
};

export default Cart;

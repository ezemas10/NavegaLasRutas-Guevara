import "./CartWidget.css";

import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {

  const { getCantidadTotal } = useContext(CartContext);
  let total = getCantidadTotal();

  return (

    <Link to="/carrito">
        <div className="cartContainer">
            <FaShoppingCart/>
          <div className="cartStyle">
             <span className="counterClass"> {total} </span>
          </div>
        </div>
    </Link>

  );
};
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import "./CartWidget.css";

export const CartWidget = ({contador}) => {
  return (

    <Link to="/carrito">
        <div className="cartContainer">
            <FaShoppingCart/>
          <div className="cartStyle">
             <span className="counterClass"> {contador} </span>
          </div>
        </div>
    </Link>

  );
};

// export const CartWidget = () => {
//   return (
//     <div>
//       <FaShoppingCart />
//     </div>
//   );
// };

import "./productCard.css";

import { Link } from "react-router";
import Contador from "../../common/contador/Contador";

const ProductCard = ({ product }) => {
  const { id, titulo, descripcion, precio , stock, categoria, imageUrl} = product;

  return (
    
    <div className="cardClass">

      <div className="buttonCard">
          <Contador product={product} mostrar="Boton Agregar"/>
      </div>

      <Link to={`/detalle/${id}`} className="cardLinks">

          <div>

            <h1>{titulo}</h1>
            <img className= "imagenes" src = {imageUrl}/>
            <h2>Descripción: </h2>
            <h3>{descripcion}</h3>
            <span>
              <h2>Precio:</h2> <h3>AR$</h3> <h3>{precio}</h3>
            </span>
            <span>
              <h2>Stock:</h2> <h3>{stock}</h3>
            </span>

          </div>

      </Link>

    </div>

  );
};

export default ProductCard;

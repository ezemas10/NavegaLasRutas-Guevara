
import "./productCard.css";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { id, titulo, descripcion, precio , stock, categoria, imageUrl} = product;
  return (
    
    <div className="cardClass">
      <Link to={`/detalle/${id}`} className="cardLinks">
          <div>

            <h1>{titulo}</h1>
            <img className= "imagenes" src = {imageUrl}/>
            <h2>Descripción: </h2>
            <h3>{descripcion}</h3>
            <h2>Precio:</h2> 
            <h3>{precio}</h3>
            <h2>Stock: </h2>
            <h3>{stock}</h3>

          </div>

      </Link>

    </div>

  );
};

export default ProductCard;

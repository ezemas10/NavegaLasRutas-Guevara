
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { titulo, descripcion, precio , stock, categoria, imageUrl} = product;
  return (
    
    <div className="cardClass">

      <h1>{titulo}</h1>
      <img class= "imagenes" src = {imageUrl}></img>
      <h2>Descripción: </h2>
      <h3>{descripcion}</h3>
      <h2>Precio:</h2> 
      <h3>{precio}</h3>
      <h2>Stock: </h2>
      <h3>{stock}</h3>

    </div>

  );
};

export default ProductCard;

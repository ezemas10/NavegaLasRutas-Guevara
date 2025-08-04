import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ contador, setContador } = {}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const element = products.find((producto) => producto.id === id);
    setProduct(element);
  }, [id]);;

  const sumar = () => {
    if (setContador) setContador(contador + 1);
  };

  return (
    <div>
        <div className="itemDetails">
          <h1>{product.titulo}</h1>
          <h3>{product.descripcion}</h3>
          <a href={product.imageUrl} target="_blank"> <img className="imagenDetails" src={product.imageUrl} alt={product.titulo} /></a>
          <h3>{product.precio}</h3>
        </div>
        <button onClick={sumar} className="buttonDetails">Agregar al carrito</button>
    </div>
  );
};

{/* <h1>{titulo}</h1>
            <img className= "imagenes" src = {imageUrl}/>
            <h2>Descripción: </h2>
            <h3>{descripcion}</h3>
            <h2>Precio:</h2> 
            <h3>{precio}</h3>
            <h2>Stock: </h2>
            <h3>{stock}</h3> */}

export default ItemDetailContainer;


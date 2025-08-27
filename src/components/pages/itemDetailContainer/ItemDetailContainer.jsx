import "./ItemDetailContainer.css";

import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

import { useContext, useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import { CartContext } from "../../../context/CartContext";
import Contador from "../../common/contador/Contador";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const element = products.find((producto) => producto.id === id);
    setProduct(element);
  }, [id]);


  return (
    <div>
        <div className="itemDetails">
          <h1>{product.titulo}</h1>
          <h3>{product.descripcion}</h3>
          <a href={product.imageUrl} target="_blank"> <img className="imagenDetails" src={product.imageUrl} alt={product.titulo} /></a>
          <h3>AR$ {product.precio}</h3>
          <span>
          <h2>Stock:  </h2> <h3>{product.stock}</h3>
          </span>
          <div className="componenteContador"> <Contador product={product} /> </div>
        </div>
    </div>
  );
};

export default ItemDetailContainer;


import './ItemListContainer.css';

import { useEffect, useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { CartContext } from "../../../context/CartContext";
import Contador from "../../common/contador/Contador";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { nombre } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (producto) => producto.categoria === nombre
    );
    const getProducts = new Promise((resolve, reject) => {
      resolve(nombre ? productosFiltrados : products);
    });

    getProducts.then((res) => setItems(res));
  }, [nombre]);

  return (

    <div>

        <h1 className="titulo">Mis productos</h1>

        <div className="contenedorGeneral">

          <div className= "products">
          
            {items.map((product) => {
              return <ProductCard key={product.id} product={product}/>;
            })}

          </div>

        </div>
    </div>
  );
};

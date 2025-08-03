import './ItemListContainer.css';

import { useEffect, useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (producto) => producto.categoria === name
    );
    const getProducts = new Promise((resolve, reject) => {
      resolve(products);
    });

    getProducts.then((res) => setItems(res));
  }, []);

  return (

    <div>

        <h1 className="titulo">Mis productos</h1>

        <div className="contenedorGeneral">

          <div className= "products">
          
            {items.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}

          </div>

        </div>
    </div>
  );
};

// export const ItemListContainer = ({saludo}) => {
//   return (
//   <div> 
//     <h1>{saludo}</h1>
//   </div>
//   )
// };

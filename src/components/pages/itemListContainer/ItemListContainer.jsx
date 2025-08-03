import './ItemListContainer.css';

import { useEffect, useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(products);
    });

    getProducts.then((res) => setItems(res));
  }, []);

  return (
    <div>

      <h1 className="titulo">Mis productos</h1>

      <div className= "products">
      
        {items.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}

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

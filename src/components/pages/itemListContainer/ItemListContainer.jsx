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
    <div class products> 
      <h1>Mis productos</h1>
      
      {items.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      
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

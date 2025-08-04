import './ItemListContainer.css';

import { useEffect, useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";

export const ItemListContainer = ({ contador, setContador }) => {
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
              return <ProductCard key={product.id} product={product} contador={contador} setContador={setContador}/>;
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

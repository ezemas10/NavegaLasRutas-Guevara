import './ItemListContainer.css';
import { ClockLoader } from "react-spinners";

import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useEffect, useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { CartContext } from "../../../context/CartContext";
import Contador from "../../common/contador/Contador";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { nombre } = useParams();

  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState({                  
    errorStatus: 0,
    errorMessage: "",
  });
  const [showAlert, setShowAlert] = useState({          
    show: false,
    textAlert: "",
  });
  
  useEffect(() => {
    
    setIsLoading(true);                                 

  //   const productosFiltrados = products.filter(
  //     (producto) => producto.categoria === nombre
  //   );
  //   const getProducts = new Promise((resolve, reject) => {
  //     resolve(nombre ? productosFiltrados : products);
  //   });

  //   getProducts.then((res) => setItems(res));
  // }, [nombre]);

    let productosCollection = collection(db, "products");

    let consulta = productosCollection;

    if (nombre) {
      let filtrado = query(productosCollection, where("category", "==", nombre));
      consulta = filtrado;
    }
    
    let getProducts = getDocs(consulta);

    getProducts.then((res) => {

      let array = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(array);
      
     })

    .finally(() => { setTimeout(() => setIsLoading(false), 1000);});

  }, [nombre]);


  return (

  <div>
    <h1 className="titulo">Todos los Productos</h1>

    <div className="contenedorGeneral">

      <div className="products">

        {isLoading ? (
          <ClockLoader color="#008B8B" size={50} />
        ) : (
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

      </div>

    </div>

    {!isLoading && error.errorMessage && <h1>{error.errorMessage}</h1>}

    {showAlert.show && alert(showAlert.textAlert)}

    </div>

  );

};

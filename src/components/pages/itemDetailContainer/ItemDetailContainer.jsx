import "./ItemDetailContainer.css";
import { ClockLoader } from "react-spinners";

import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

import { useContext, useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import { CartContext } from "../../../context/CartContext";
import Contador from "../../common/contador/Contador";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState({                  
    errorStatus: 0,
    errorMessage: "",
  });
  const [showAlert, setShowAlert] = useState({          
    show: false,
    textAlert: "",
  });

  // useEffect(() => {
  //   const element = products.find((producto) => producto.id === id);
  //   setProduct(element);
  // }, [id]);


  useEffect(() => {

    setIsLoading(true);   

    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);


    getDoc(refDoc).then((res) => setProduct({ id: res.id, ...res.data() }))

    .finally(() => { setTimeout(() => setIsLoading(false), 1000);});

  }, [id]);


  return (
    <div>
      
      {isLoading ? (

        <div className="spinner">
          <ClockLoader color="#008B8B" size={50} />
        </div>

        ) : (

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

        )}

    {!isLoading && error.errorMessage && <h1>{error.errorMessage}</h1>}

    {showAlert.show && alert(showAlert.textAlert)}

    </div>
  );
};

export default ItemDetailContainer;


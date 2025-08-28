import "./Checkout.css";

import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {

  const [user, setUser] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
  });

  const { cart, getCantidadTotal, getPrecioTotal, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (evento) => {
    evento.preventDefault();
   
    let totalQ = getCantidadTotal();
    let totalPrice = getPrecioTotal();

    let objetoCompra = {
      comprador: user,
      items: cart,
      total_Cantidad: totalQ,
      total_Precio: totalPrice,
    };

    let ordersCollection = collection(db, "orders");
    let res = addDoc(ordersCollection, objetoCompra);
    res
      .then((res) => {
        setOrderId(res.id);
        resetCart();
      })
      .catch((error) => {
        alert("Ocurrio un error al comprar");
        console.log(error);
      });

    let productosCollection = collection(db, "products");
    objetoCompra.items.forEach((elemento) => {
      let productRef = doc(productosCollection, elemento.id);
      updateDoc(productRef, { stock: elemento.stock - elemento.cantidad });
    });
  };

  const handleChange = (evento) => {
    setUser({ ...user, [evento.target.name]: evento.target.value });
  };

  return (
  <div className="container my-5">
    <h1 className="titulo text-center mb-4">Formulario de Compra</h1>

    {orderId ? (
      <div className="alert alert-success text-center">
        <h3 className="checkoutFont">Número de orden de compra:</h3>
        <h2>{orderId}</h2>
      </div>
        ) : (
          <form className="formulario-content mx-auto col-md-6" onSubmit={handleSubmit}>
            <div className="form-estilopropio mb-3">
              <label htmlFor="inputNombre" className="form-label"></label>
              <input
                id="inputNombre"
                type="text"
                className="form-control label-estilopropio"
                placeholder="Nombre"
                name="Nombre"
                value={user.Nombre}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-estilopropio mb-3">
              <label htmlFor="inputTelefono" className="form-label"></label>
              <input
                id="inputTelefono"
                type="text"
                className="form-control label-estilopropio"
                placeholder="Teléfono"
                name="Telefono"
                value={user.Telefono}
                onChange={handleChange}
                required
                />
              </div>

            <div className="form-estilopropio mb-3">
              <label htmlFor="inputEmail" className="form-label"></label>
              <input
                id="inputEmail"
                type="email"
                className="form-control label-estilopropio"
                placeholder="Email"
                name="Email"
                value={user.Email}
                onChange={handleChange}
                required
              />
              </div>

            <button type="submit" className="button-propio">
              Comprar
            </button>
          </form>
        )}
  </div>
  );
};

export default Checkout;

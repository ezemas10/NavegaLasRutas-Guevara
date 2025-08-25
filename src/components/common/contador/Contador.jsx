import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

const Contador = ({ product, mostrar }) => {
  const { addToCart, getStockDisponible } = useContext(CartContext);

  const [contador, setContador] = useState(1);
  const [stock, setStock] = useState(product.stock);
  const disponible = getStockDisponible(product);

  useEffect(() => {
    setStock(disponible);
  }, [product.stock, disponible]);

  console.log(contador);
  console.log(product.stock);
  console.log(stock);

  
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } 
    else if (contador === 0) (setContador(0));
    else {
      toast.warn("Stock Límite");
    }
  };


  const restar = () => {
    if (contador === 0) (setContador(0));
    else setContador(contador - 1);
  };


  const agregarAlCarrito = () => {
    const agregado = addToCart({ ...product, cantidad: contador });
    
    if (agregado > 0) {
      toast.success("Producto agregado al carrito");
      setContador(1);
    } 
    else toast.error("No hay más stock");
    
  };


  if (mostrar === "Boton Agregar") {
    return (
      <div>
        <button onClick={() => { agregarAlCarrito(); }}> Agregar al carrito </button>
      </div>
    );
  }

  else {
    return (
      <div>
        <div>
          <button onClick={sumar}>+</button>
          <button onClick={restar} disabled={contador === 1}> - </button>
        </div>

        <div>
          <h2>Cantidad a comprar: </h2> 
          <h3>{contador}</h3> 
        </div>

        <div>
          <button onClick={() => { agregarAlCarrito(); }}> Agregar al carrito </button>
        </div>
      </div>
    );
  }
};

export default Contador;

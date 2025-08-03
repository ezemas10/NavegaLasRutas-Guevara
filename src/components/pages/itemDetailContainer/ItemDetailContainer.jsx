import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";

const ItemDetailContainer = ({ contador, setContador } = {}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const element = products.find((producto) => producto.id === Number(id));
    setProduct(element);
  }, [id]);

  const sumar = () => {
    if (setContador) setContador(contador + 1);
  };

  return (
    <div>
      <h3>{product.titulo}</h3>
      <h3>{product.descripcion}</h3>
      <button onClick={sumar}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;


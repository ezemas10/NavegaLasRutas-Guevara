import { useEffect, useState } from "react";

export const Contador = ({ name }) => {
 
  const [contador, setContador] = useState(0); 

  const sumar = () => {
    setContador(contador + 1);
  };

  useEffect(() => {}, [name]); 

  return (
    <div>
      <h3>{contador}</h3>
      <button onClick={sumar}>Agregar al carrito</button>
    </div>
  );
};

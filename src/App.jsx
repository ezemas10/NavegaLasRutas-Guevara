import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0);

   const sumar = () => {
    setContador(contador + 1);
  };
  
  return (
    <div>
      <Navbar contador={contador} />
      <ItemListContainer/>
      <button onClick={sumar}>Sumar contador</button>
      <Footer/>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import Cart from "./components/pages/cart/Cart";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from './components/pages/itemDetailContainer/ItemDetailContainer';
import { useState } from "react";
import NotFound from "./components/pages/notFound/NotFound";

function App() {
  
  const [contador, setContador] = useState(0);

  return (
      <BrowserRouter>
      <Navbar contador={contador} />

      <Routes>
        <Route path="/" element={<ItemListContainer contador={contador} setContador={setContador} />} />
        <Route path="/categoria/:nombre" element={<ItemListContainer contador={contador} setContador={setContador} />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer contador={contador} setContador={setContador} />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;



import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import Cart from "./components/pages/cart/Cart";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from './components/pages/itemDetailContainer/ItemDetailContainer';
import { useState } from "react";
import NotFound from "./components/pages/notFound/NotFound";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
      <BrowserRouter>

      <CartContextProvider>
        <Navbar/>

        <Routes>
          
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:nombre" element={<ItemListContainer /> } />
            <Route path="/detalle/:id" element={<ItemDetailContainer /> } />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />

        </Routes>

        <ToastContainer position="top-right" autoClose={2000} />

      </CartContextProvider>

      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

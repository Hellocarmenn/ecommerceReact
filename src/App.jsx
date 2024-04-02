import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./componentes/Contacto";
import { CartProvider } from "./context /CartContext";
import Nosotros from "./componentes/Nosotros";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import {Carrito} from "./componentes/Carrito"
import Checkout from "./componentes/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemDetailContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/checkout"element={<Checkout/>} />
          </Routes>
          {/* <ItemListContainer/>*/}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nosotros } from "./componentes/Nosotros";
import Contacto from "./componentes/Contacto";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemDetailContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>

        </Routes>

        {/* <ItemListContainer/>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;

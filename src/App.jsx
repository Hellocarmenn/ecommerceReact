
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import "./main.css"
function App() {
  return (
    <div>
      <Navbar/>
      {/* <ItemListContainer/>*/}
      <ItemDetailContainer itemId={2}/>

    </div>

  );
}

export default App;

import { useEffect, useState } from "react";
/* importando datos porque los vamos a utilizar*/
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
  /*estado para guardar datos */
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;
  console.log(categoria);

  /*nos permite decir que solo se haga cuando el componente se monta */
  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};
export default ItemListContainer;

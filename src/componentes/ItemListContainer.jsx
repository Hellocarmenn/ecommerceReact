import { useEffect, useState } from "react";
/* importando datos porque los vamos a utilizar*/ 
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from "./ItemList";
export const ItemListContainer = () => {

    /*estado para guardar datos */
    const [productos, setProductos] = useState([]);
    console.log(productos)

    /*nos permite decir que solo se haga cuando el componente se monta */
    useEffect(() => {
      pedirDatos()
        .then((res) =>{
            setProductos(res)
      })
    
    }, [])
    
  return (
    <div>
        <ItemList productos={productos}/>
    </div>

  )
}
export default ItemListContainer
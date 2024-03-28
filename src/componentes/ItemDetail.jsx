import { toCapital } from "../helpers/toCapital"
import Item from "./Item";
import { ItemCount } from "./ItemCount"
import { useState } from 'react'



const ItemDetail = ( {item} ) => {

  const [cantidad,setCantidad]= useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad -1)
  }

  const handleSumar = () => {
       cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregar = () => {
    console.log({...Item,quanty:cantidad})
  }




  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio">${item.precio}</p>
                <ItemCount cantidad = {cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
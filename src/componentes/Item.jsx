import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <div className="producto">
        <img src={producto.imagen}></img>
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio:${producto.precio}</p>
            <p>Categora:{producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <Link className="ver-mas" href={`/item`}>Ver más</Link>
        </div>
        
    </div>
  )
}
export default Item

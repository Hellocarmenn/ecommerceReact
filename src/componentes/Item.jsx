import React from 'react'

export const Item = ({producto}) => {
  return (
    <div className="producto">
        <img src={producto.imagen}></img>
        <div>
            <h4>{}producto.titulo</h4>
            <p>Precio:${producto.precio}</p>
            <p>Categora:{producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <a className="ver-mas" href={`/item/${producto.id}`}>Ver más</a>
        </div>
        
    </div>
  )
}
export default Item

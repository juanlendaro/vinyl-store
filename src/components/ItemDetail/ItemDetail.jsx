import React from 'react'

const ItemDetail = ({item:{id,title,price,img}}) => {
  return (
    <div>
        <li>{id}</li>
        <li>{title}</li>
        <li>{price}</li>
        <li>{img}</li>
    </div>
  )
}

export default ItemDetail
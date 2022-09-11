import React from 'react'

const ItemDetail = ({item:{id,title,price,img}}) => {
  return (
    <div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{price}</div>
        <div>{img}</div>
    </div>
  )
}

export default ItemDetail
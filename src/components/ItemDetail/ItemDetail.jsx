import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    <article>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}</h3>

            <img src={product.img} alt="" style= {{width: "40rem"}} />
            <ItemCount product= {product} />
        </article>
  )
}

export default ItemDetail
import React from 'react'
import { useContext } from 'react';
import { cartContext } from '../CartContext/CartContextComponent';
import {BiTrash} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import "./cart.css"

export default function Cart() {
  
  const {cart, totalCount, totalToPay, deleteFromCart} = useContext(cartContext);  

  return (
    <>
    <div className='cartcontainer'>
    {cart.map((item)=>(
      
      <div key={item.id}>
      {item.title +" "+ item.count} 
      <span onClick={()=> deleteFromCart(item.id)}><BiTrash /></span>
      </div>
      
    ))}
    <div>
      You have in your cart: {totalCount} albums.<br/> You will pay: $ {totalToPay} 
    </div>
    <Link to= '/checkout'> Go to Checkout</Link>
    </div>
    </>
  )
}

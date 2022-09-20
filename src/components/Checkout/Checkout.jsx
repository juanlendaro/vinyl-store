import React from 'react'
import { useState } from 'react'
import { cartContext } from '../CartContext/CartContextComponent';
import { useContext } from 'react';
export default function Checkout() {

 const {totalToPay,cart}= useContext(cartContext);  
const [name, setName]= useState('');
const [email, setEmail]= useState('');
const [phone,setPhone] = useState('');

function send(){
  const order ={
    buyer: {name, email, phone},
    totalToPay,
    cart,
  };
  console.log(order);
}


  return (
    <div>
      <h1>  Finish your Order  </h1>
      <input type='text' placeholder='add your name' onChange={(e)=>setName(e.target.value)} /> <br/>
      <input type='email'placeholder='youremail@here.com' onChange={(e)=>setPhone(e.target.value)}/><br/>
      <input type='tel' placeholder='enter your phone number'  onChange={(e)=>setEmail(e.target.value)}/><br/>
      <button onClick={send}>Send</button>
    </div>
  )
}

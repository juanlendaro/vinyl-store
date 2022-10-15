import React from 'react'
import { useState } from 'react'
import { cartContext } from '../CartContext/CartContextComponent';
import { useContext } from 'react';
import {addDoc,collection, getFirestore} from 'firebase/firestore';
import "./checkout.css"


export default function Checkout() {

 const {totalToPay,cart, deleteAll}= useContext(cartContext);  
const [name, setName]= useState('');
const [email, setEmail]= useState('');
const [phone,setPhone] = useState('');
const [orderId,setOrderId] = useState('');
function sendOrder(){
  const order ={
    buyer: {name, email, phone},
    totalToPay,
    cart,
  };

  
  const db = getFirestore();
  const orders = collection(db,"orders");
 addDoc(orders, order).then(({id})=>setOrderId(id));
}
  return (
    <>
    <div className='checkoutcontainer'>
    {orderId ? ("Thanks! Your order ID is: " + orderId):
    (<div>
      <h1>  Finish your Order  </h1>
      <input type='text' placeholder='add your name' onChange={(e)=>setName(e.target.value)} /> <br/>
      <input type='email'placeholder='youremail@here.com' onChange={(e)=>setPhone(e.target.value)}/><br/>
      <input type='tel' placeholder='enter your phone number'  onChange={(e)=>setEmail(e.target.value)}/><br/>
      <button onClick={sendOrder}>Send</button>
    </div>
  )}
  </div>
    </>
  )
}

import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { cartContext } from '../CartContext/CartContextComponent';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ItemCount({product}) {

    const [count, setCount] = useState(0);
    const [removeButton, setRemoveButton] = useState (false);
    const {cart, addToCart} = useContext(cartContext);
    function sum(){
       if (count<20){
        setCount (count + 1);
       }
    }
    function res(){
        if (count >=2){
        setCount(count - 1);
        }
    }

    function onAdd() {
        addToCart(product, count);
        setRemoveButton(true);
    }
    useEffect(() => {
      console.log(cart);
    },  [cart]);
    
  return (
    <div>
        <span style={{cursor: "pointer"}} onClick={sum}>+</span>
        {count}
        <span style={{cursor: "pointer"}} onClick={res}>-</span>
        <br/>
        {removeButton? (
            <>
            Album added to cart.
            <br />
            <Link to='/'>Continue shopping</Link>
            <Link to='/checkout'>Go to Checkout</Link>
            </>
            ) : (
            <button onClick={onAdd}>Add to cart</button>)}
    </div>
  );
}







// import { useState } from "react";

// export const ItemCount = ({stock, initial, onAdd}) =>{
//     const [contador, setContador] = useState(initial)
   
//     const aumentarContador = () => {       
//         if (contador < stock) setContador(contador + 1)
//     }

//     const disminuirContador = () => {
//         if (contador > initial) setContador (contador - 1)
//     }

//     return ( 
//     <>
//     <button onClick = {disminuirContador}>-</button>
//     <span>{contador}</span>
//     <button onClick={aumentarContador}>+</button> 
//     <div><button disabled = {contador===0} onClick={()=>{onAdd(contador)}}>Agregar al carrito</button></div>        
//     </>
//     );
// };
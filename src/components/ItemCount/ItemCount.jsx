import React from 'react'
import { useState } from 'react';

export default function ItemCount({product}) {

    const [count, setCount] = useState(0);
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
        alert (
            "You will add " + count + " copies of this album" 
        );
    }

  return (
    <div>
        <span style={{cursor: "pointer"}} onClick={sum}>+</span>
        {count}
        <span style={{cursor: "pointer"}} onClick={res}>-</span>
        <br/>
        <button onClick={onAdd}>Add to cart</button>
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
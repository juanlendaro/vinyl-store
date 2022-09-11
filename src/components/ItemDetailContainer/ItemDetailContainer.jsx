import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import albumsJson from '../../albums.json'  ;
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
      getItem().then (data=>{
        console.log (data);
        setItem(data);
      })
    }, [])
    
  
  const getItem = () => { 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (albumsJson)
        }, 2000);
        
    })
   }
  
    return (
    <ItemDetail item = {item}/>
  )
}

export default ItemDetailContainer
import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import albumsJson from '../../albums'  ;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams()

    useEffect(() => {
      getItem().then (data=>{
        if (data);
        setItem(data);
      })
    }, [])
    
  
  const getItem = () => { 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (albumsJson.find (p => p.id === id))
        }, 2000);
        
    })
   }
  
    return (
    <ItemDetail item = {item}/>
  )
}

export default ItemDetailContainer
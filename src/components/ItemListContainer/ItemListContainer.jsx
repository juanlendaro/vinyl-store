import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import albumsJson from '../../albums.json'  ;

export default function ItemListContainer ({greeting}){
    const [albums, setAlbums] = useState ([]);

    const getAlbums = (data, time)=> new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (data){
                resolve (data)
            }else{
                reject ("error");
            }
        }, time);
    });

    useEffect (()=>{
        getAlbums(albumsJson, 2000).then((res)=>{
            setAlbums(res)
        }).catch((err)=>console.log(err,"We were unable to find any albums"));
    },[])
    
    const onAdd = (contador) =>{
        console.log ("El valor del contador es:", contador)
    }
    return (
        <>
        <h1> Hey! {greeting} </h1>
        <ItemList albums = {albums} />
        <div>
            <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
        </div>
        </>
    );
    };

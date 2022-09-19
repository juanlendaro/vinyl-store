import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer ({}){
    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'products',id)
               
        getDoc(refDoc).then((album)=>{
        
            const aux = {
                ...album.data(),
                id: album.id,
            };
            
            setProduct(aux);
        });    
    }, [id]);
    

    return <ItemDetail product={product}/>;    




    
    };

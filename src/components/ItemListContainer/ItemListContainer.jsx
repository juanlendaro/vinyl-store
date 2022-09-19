import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from "react-router-dom";

export default function ItemListContainer ({}){
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        
        let myCollection
        if(category==undefined){
             myCollection = collection(db, 'products');
            
        } else{
             myCollection = query(
                collection(db, 'products'),
                 where("category", "==", category)
                 );
            
        }
        getDocs(myCollection).then((data)=>{
        
            const auxProducts = data.docs.map((product)=> ({
                ...product.data(),
                id: product.id,
            }));
            
            setProducts(auxProducts);
        });    
    }, [category]);
    

    return <ItemList products={products}/>
    




    
    };

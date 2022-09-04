import { ItemCount } from "./ItemCount";


export default function ItemListContainer ({greeting}){
    const onAdd = (contador) =>{
        console.log ("El valor del contador es:", contador)
    }
    return (
        <>
        <h1> Hey! {greeting} </h1>
        <div>
            <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
        </div>
        </>
    );
    };

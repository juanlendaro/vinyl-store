import Item from '../Item/Item'
import "./itemlist.css"

const ItemList = ({products}) => {
    return (
        <div className='itemlist'>
            {products.map(products=><Item key={products.id} {...products} />)}
        </div>
    )
}

export default ItemList
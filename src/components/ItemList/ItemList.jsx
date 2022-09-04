import Item from '../Item/Item'

const ItemList = ({albums}) => {
    return (
        <div>
            {albums.length ? albums.map(album=><Item key={album.id} {...album} />) : <h2>Loading</h2>}
        </div>
    )
}

export default ItemList
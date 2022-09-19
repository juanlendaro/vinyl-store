import { Link } from "react-router-dom";


const Item = ({title, img, price, id})=>{
    return (
        <Link to={'/item/' + id}>
        <article>
            <h3>{title}</h3>
            <h3>{price}</h3>

            <img src={img} alt="" style= {{width: "15rem"}} />
        </article>
        </Link>
    );
};

export default Item
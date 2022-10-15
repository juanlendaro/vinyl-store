import { Link } from "react-router-dom";
import "./item.css";

const Item = ({title, img, price, id})=>{
    return (
        <Link style={{ textDecoration: 'none' }} to={'/item/' + id}>
        <article className="card">
            <h3>{title}</h3>
            <h3>{price}</h3>

            <img src={img} alt=""  />
        </article>
        </Link>
    );
};

export default Item
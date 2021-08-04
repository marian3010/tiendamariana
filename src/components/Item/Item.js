import {Link} from "react-router-dom";

const Item = ({ product }) => {
    return (
      <Link className="productWrapper" to={`/products/${product.id}`} key={product.id}>
        <img src={product.img} alt="producto" />
        <p className="titulo">{product.title}</p>
        <p className="precio">${product.price}</p>
      </Link>       
    );
};    
export default Item;

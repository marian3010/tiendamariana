import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {
    
    const onAdd = (cantCart) => {
        alert(`Se agregaron al carrito ${cantCart} items`);
    };
    
    return ( 
        <div className="detalleItem">
            <img src = { product.img } alt = "producto" />
            <p className="titulo">{product.title}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount stock = { product.stock } valorInicial = { 1 } onAdd = { onAdd } />
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
};
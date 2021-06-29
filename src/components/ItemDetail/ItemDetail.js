import { useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {
    const [cantCart,setCantCart] = useState(0);
    const [btnPayment,setBtnPayment] = useState(false);

    const onAdd = (cantidad) => {
        setCantCart(cantidad);
    };
    
    useEffect(() => {
        if (cantCart > 0) {
            setBtnPayment(true);
        }
    }, [cantCart]);

    return ( 
        <div className="detalleItem">
            <img src = { product.img } alt = "producto" />
            <p className="titulo">{product.title}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount stock = { product.stock } valorInicial = { 1 } onAdd = { onAdd } />
            {btnPayment ? (<Link to="/Cart" className="btn-payment" onClick={() => {
                setCantCart(0);}}>Terminar mi compra</Link>
            ) : null}
            <br></br>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
};
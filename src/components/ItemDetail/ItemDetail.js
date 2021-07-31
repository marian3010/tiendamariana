import { useEffect, useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from "react-router-dom";
import './ItemDetail.css';
import {CartContext} from "../../context/CartContext";

export const ItemDetail = ({ product }) => {
    const [cantCart,setCantCart] = useState(0);
    const [btnPayment,setBtnPayment] = useState(false);
    const { agregarProd } = useContext(CartContext);
   
    const onAdd = (cantidad) => {
        setCantCart(cantidad);
    };
    
    const finCompra = () => {
      agregarProd(product.id, product.title, product.price, cantCart);
    };
    
       
    useEffect(() => {
        if (cantCart > 0) {
            setBtnPayment(true);
        }
    }, [cantCart]);
    
    
    return ( 
        <div key={product.id} className="detalleItem">
            <div className="prod-img">
                <img src = { product.img } alt = "producto" />
                <Link to="/">Volver al Inicio</Link>
            </div>
            <div className="prod-info">
                <p className="titulo">{product.title}</p>
                <p className="precio">${product.price}</p>
                <p className="stock">Stock: {product.stock}</p>
                <ItemCount stock = { product.stock } valorInicial = { 1 } onAdd = { onAdd } />
                {btnPayment ? (<Link to="/Cart" className="btn-payment" onClick={() => {
                    finCompra();}}>Comprar</Link>
             ) : null}
                <br></br>
                
            </div>
        </div>
    );
};